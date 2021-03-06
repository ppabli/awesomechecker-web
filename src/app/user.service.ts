import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { LocalStorageService } from './local-storage.service';
import { Rol } from './rol.model';
import { Team } from './team.model';
import { User } from './user.model';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	private userLogin: boolean = false;
	isLogin = new BehaviorSubject<boolean>(this.userLogin);

	private _user: User | null = null;
	user = new BehaviorSubject<User | null>(this._user);

	private _teams: Team[] = [];
	teams = new BehaviorSubject<Team[]>(this._teams);

	private _activeTeam: Team | null = null;
	activeTeam = new BehaviorSubject<Team | null>(this._activeTeam);

	private _roles: Rol[] = [];
	roles = new BehaviorSubject<Rol[]>(this._roles);

	private _activeRoles: Rol[] = [];
	activeRoles = new BehaviorSubject<Rol[]>(this._activeRoles);

	private _canGet: boolean = false;
	canGet = new BehaviorSubject<boolean>(this._canGet);

	private _canPost: boolean = false;
	canPost = new BehaviorSubject<boolean>(this._canPost);

	private _canPut: boolean = false;
	canPut = new BehaviorSubject<boolean>(this._canPut);

	private _canDelete: boolean = false;
	canDelete = new BehaviorSubject<boolean>(this._canDelete);

	constructor(private apiService: ApiService, private localStorageService: LocalStorageService, private snackBar: MatSnackBar, private router: Router) {

	}

	updateActions() {
		let getRoles = [];
		let putRoles = [];
		let postRoles = [];
		let deleteRoles = [];
		let url = this.router.url.split("/")[1];
		for (let rol of this.activeRoles.value) {
			if (rol.getGetPermissions()[url] == true) {
				getRoles.push(rol)
			}
			if (rol.getPostPermissions()[url] == true) {
				postRoles.push(rol);
			}
			if (rol.getPutPermissions()[url] == true) {
				putRoles.push(rol);
			}
			if (rol.getDeletePermissions()[url] == true) {
				deleteRoles.push(rol);
			}
		}
		this.canGet.next(getRoles.length != 0 ? true : false)
		this.canPost.next(postRoles.length != 0 ? true : false)
		this.canPut.next(putRoles.length != 0 ? true : false)
		this.canDelete.next(deleteRoles.length != 0 ? true : false)
	}

	changeTeam(team: Team) {
		this.activeTeam.next(team);
		let newRoles = this.roles.value.filter((rol: Rol) => {
			return rol.teamId == team.id;
		})
		this.activeRoles.next(newRoles);
		this.localStorageService.setItem('activeTeam', team.name);
	}

	alreadyLogin() {

		let token = this.localStorageService.getItem('token');

		if (token) {

			let temp = this.apiService.getDecodedAccessToken(token);

			let now = new Date();
			if (now > temp.expires) {
				return this.logout();
			}

			this.isLogin.next(true);

			this.user.next(temp.user);
			this.teams.next(temp.user.teams.map((team: any) => new Team(team)));
			this.roles.next(temp.user.roles.map((rol: any) => new Rol(rol)));

			let localStorageTeamName = this.localStorageService.getItem('activeTeam');

			let team = this.teams.value.find(t => t.name == localStorageTeamName);
			let activeTeam = team || temp.user.teams[0];
			this.activeTeam.next(activeTeam);

			this.activeRoles.next(this.roles.value.filter((rol: Rol) => {
				return rol.teamId == activeTeam.id;
			}))

		}

	}

	logout() {

		this.isLogin.next(false);

		this.teams.next([]);
		this.activeTeam.next(null);

		this.roles.next([]);
		this.activeRoles.next([]);

		this.user.next(null);

		this.localStorageService.removeItem('token');

		this.snackBar.open('Session done!', '', {
			duration: 1500,
		});

		this.router.navigate(['/']);

	}

	login(formData: any) {

		this.apiService.post('/login', formData).subscribe({
			next: (res: any) => {

				let temp = this.apiService.getDecodedAccessToken(res.token);

				this.user.next(temp.user);
				this.teams.next(temp.user.teams.map((team: any) => new Team(team)));
				this.roles.next(temp.user.roles.map((rol: any) => new Rol(rol)));

				this.activeTeam.next(this.teams.value[0]);
				this.activeRoles.next(this.roles.value.filter((rol: Rol) => {
					return rol.teamId == temp.user.teams[0].id;
				}))

				this.isLogin.next(true);

				this.snackBar.open('Login successful', '', {
					duration: 1500,
				});

				this.localStorageService.setItem('token', res.token);

				this.router.navigate(['/']);

			}
		})

	}

}

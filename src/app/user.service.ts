import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
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

	constructor(private apiService: ApiService, private snackBar: MatSnackBar, private router: Router) {

		this.isLogin.next(false);

	}

	logout() {

		this.isLogin.next(false);

		this.teams.next([]);
		this.activeTeam.next(null);
		this.user.next(null);

		this.snackBar.open('Session done!', '', {
			duration: 1500,
		});

	}

	login(formData: any) {
		this.apiService.post('/login', formData).subscribe({
			next: (res) => {

				let temp = this.apiService.getDecodedAccessToken(res.token);

				this.user.next(temp.user);
				this.teams.next(temp.user.teams);
				this.activeTeam.next(temp.user.teams[0]);

				this.isLogin.next(true);

				this.snackBar.open('Login successful', '', {
					duration: 1500,
				});

				this.router.navigate(['/']);
			},
			error: (err) => {

				this.isLogin.next(false);

				this.teams.next([]);
				this.activeTeam.next(null);
				this.user.next(null);

				this.snackBar.open('Login failed', '', {
					duration: 1500,
				});

			}
		});
	}

}

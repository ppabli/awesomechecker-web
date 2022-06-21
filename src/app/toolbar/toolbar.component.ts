import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from '../local-storage.service';
import { SidenavService } from '../sidenav.service';
import { Team } from '../team.model';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss', '../app.component.scss']
})
export class ToolbarComponent implements OnInit {

	protected isLogin: boolean;
	protected user: User;

	teams: Team[]
	selectedTeam: Team;

	constructor(private sidenav: SidenavService, private userService: UserService) {
		this.userService.isLogin.subscribe(isLogin => this.isLogin = isLogin);
		this.userService.user.subscribe(user => {
			if (user) {
				this.user = user;
			}
		});
		this.userService.teams.subscribe(teams => {
			if (teams) {
				this.teams = teams;
			}
		});
		this.userService.activeTeam.subscribe(team => {
			if (team) {
				this.selectedTeam = team;
			}
		});
	}

	ngOnInit(): void {
	}

	toggleSidenav() {
		this.sidenav.toggle();
	}

	logout() {
		this.userService.logout();
	}

	changeTeam(team: Team) {
		this.userService.changeTeam(team);
	}

}

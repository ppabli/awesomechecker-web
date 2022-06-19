import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SidenavService } from '../sidenav.service';
import { UserService } from '../user.service';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss', '../app.component.scss']
})
export class ToolbarComponent implements OnInit {

	protected isLogin: boolean;

	constructor(private sidenav: SidenavService, private user: UserService) {
		this.user.isLogin.subscribe(isLogin => this.isLogin = isLogin);
	}

	ngOnInit(): void {
	}

	toggleSidenav() {
		this.sidenav.toggle();
	}

}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
	selector: 'app-sidenav-menu',
	templateUrl: './sidenav-menu.component.html',
	styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent implements OnInit {

	links = [
		{
			name: 'Home',
			path: '/',
			icon: 'home',
		},
		{
			name: 'About',
			path: '/about',
			icon: 'info',
		},
		{
			name: 'Products',
			path: '/products',
			icon: 'waves',
			required: {
				isLogin: true
			}
		}
	];

	isLogin: boolean;

	constructor(private userService: UserService) {
		this.userService.isLogin.subscribe(isLogin => {
			this.isLogin = isLogin;
		});
	}

	visible(link: any): boolean {
		let isVisible = true;
		if (link.required) {
			isVisible = isVisible && link.required.isLogin === this.isLogin;
		}
		return isVisible;
	}

	ngOnInit(): void {

	}

}

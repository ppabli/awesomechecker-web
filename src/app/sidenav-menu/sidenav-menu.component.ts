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
				isLogin: true,
				rolGet: true
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
			if (link.required.rolGet) {
				isVisible = isVisible && this.userService.activeRoles.value.filter(rol => {
					return rol.getGetPermissions()[link.path.split('/')[1]]
				}).length != 0;
			}
		}
		return isVisible;
	}

	ngOnInit(): void {

	}

}

import { Component } from '@angular/core';
import { LocaleService } from './locale.service';
import { UserService } from './user.service';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor(private localeService: LocaleService, private userService: UserService) {
		this.localeService.init();
		this.userService.alreadyLogin();
	}

}

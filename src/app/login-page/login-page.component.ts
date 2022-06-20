import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../user.service';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss', '../app.component.scss']
})
export class LoginPageComponent implements OnInit {

	hidePass: boolean = true;

	private data = {}

	loginForm: FormGroup;

	visibleComponents = {
		'help': true,
		'terms': true,
		'privacy': true,
		'locale': true,
	}

	constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private translate: TranslateService, private userService: UserService) { }

	ngOnInit(): void {
		this.loginForm = new FormGroup({
			user: new FormControl('', [Validators.required]),
			password: new FormControl('', [Validators.required]),
		});
	}

	login(form: any) {
		this.userService.login(form);
	}

	openSnack() {

		this.translate.get('general.easter-egg.egg').subscribe(res => {
			this.snackBar.open(res, '', {
				duration: 1500,
			});
		});

	}

}

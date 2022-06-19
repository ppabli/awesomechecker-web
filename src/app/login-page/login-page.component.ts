import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss', '../app.component.scss']
})
export class LoginPageComponent implements OnInit {

	hidePass: boolean = true;

	private data = {}

	loginForm: FormGroup;

	constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private translate: TranslateService) { }

	ngOnInit(): void {
		this.loginForm = new FormGroup({
			user: new FormControl('', [Validators.required]),
			password: new FormControl('', [Validators.required]),
		});
	}

	login(form: any) {
		console.log(form);
	}

	openSnack() {
		this.translate.get('general.easter-egg.egg').subscribe(res => {
			this.snackBar.open(res);
		});
	}

}

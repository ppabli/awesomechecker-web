import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	private login: boolean = false;
	isLogin = new BehaviorSubject<boolean>(this.login);

	constructor() {

		this.isLogin.next(false);

	}

}

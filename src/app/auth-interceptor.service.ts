import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, Observable, tap } from 'rxjs';
import { ApiService } from './api.service';
import { LocalStorageService } from './local-storage.service';
import { UserService } from './user.service';

@Injectable({
	providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

	constructor(private router: Router, private userService: UserService, private snackBar: MatSnackBar, private localStorageService: LocalStorageService, private apiService: ApiService) {

	}

	private errorManager(err: any): void {
		if (err.error.message.includes('token')) {
			this.localStorageService.removeItem('token');
			this.snackBar.open('Session done!', '', {
				duration: 1500
			});
			this.router.navigate(['/login']);
		} else {
			this.snackBar.open(err.error.message, '', {
				duration: 1500
			});
		}
	}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		let token = localStorage.getItem('token');
		let selectedTeam = this.userService.activeTeam.value;

		let request = req;

		if (token) {
			request = req.clone({
				setHeaders: {
					Authorization: `${token}`
				}
			});
		}

		if (selectedTeam && selectedTeam.name != 'Admin team') {
			request = request.clone({
				params: (req.params ? req.params : new HttpParams()).append('teamId', selectedTeam.id)
			})
		}

		return next.handle(request).pipe(
			tap(res => {

				return next.handle(req);

			}),
			catchError((err: any) => {

				if (err instanceof HttpErrorResponse) {

					this.errorManager(err);

				}

				return next.handle(req);

			}),
		);
	}
}

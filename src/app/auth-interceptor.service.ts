import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { ApiService } from './api.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
	providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

	constructor(private router: Router, private snackBar: MatSnackBar, private localStorageService: LocalStorageService, private apiService: ApiService) {

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

		let request = req;

		if (token) {
			request = req.clone({
				setHeaders: {
					Authorization: `${token}`
				}
			});
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

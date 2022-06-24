import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject, lastValueFrom, Observable, take } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	private version: number = 1;
	private host: string = 'http://192.168.0.24';
	private port: number = 8081;

	private _loading = false;
	loading = new BehaviorSubject<boolean>(this._loading);

	private defaultTime: number = 1;

	constructor(private http: HttpClient) {

	}

	getDecodedAccessToken(token: string): any {
		try {
			return jwt_decode(token);
		} catch (Error) {
			return null;
		}
	}

	private fullUrl(): string {
		return this.host + ":" + this.port + '/api/v' + this.version;
	}

	get(url: string) {
		return this.http.get(this.fullUrl() + url);
	}

	post(url: string, data: any) {
		return this.http.post(this.fullUrl() + url, data);
	}

	delete(url: string) {
		return this.http.delete(this.fullUrl() + url);
	}

}

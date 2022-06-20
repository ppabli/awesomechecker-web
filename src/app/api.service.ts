import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	private version: string = '1';
	private host: string = 'http://192.168.0.24';
	private port: number = 8081;

	private _response: any = null;
	response = new BehaviorSubject<any>(this._response);

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

	post(url: string, data: any): Observable<any> {
		return this.http.post(this.fullUrl() + url, data);
	}

}

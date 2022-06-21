import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CustomBarService {

	private _format: string = 'table';
	format = new BehaviorSubject<string>(this._format);

	private _searchFormat: string = '';
	searchValue = new BehaviorSubject<string>(this._searchFormat);

	private _dataLength: number = 0;
	dataLength = new BehaviorSubject<number>(this._dataLength);

	constructor() {

	}

}

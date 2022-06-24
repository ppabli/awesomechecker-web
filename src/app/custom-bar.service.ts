import { Injectable, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TableService } from './table.service';

export enum FormatType {
	table,
	graph,
	card
}

@Injectable({
	providedIn: 'root'
})
export class CustomBarService {

	private _format: FormatType = FormatType.table;
	format = new BehaviorSubject<FormatType>(this._format);

	private _searchFormat: string = '';
	searchValue = new BehaviorSubject<string>(this._searchFormat);

	private _data: any[] = [];
	data = new BehaviorSubject<any[]>(this._data);

	constructor() {
	}

}

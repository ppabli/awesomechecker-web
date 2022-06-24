import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
	providedIn: 'root'
})
export class TableService {

	private _data: any[] = [];
	data = new BehaviorSubject<any[]>(this._data);

	private _columns: string[] = [];
	columns = new BehaviorSubject<string[]>(this._columns);

	constructor(private userService: UserService) {
		this.userService.canDelete.subscribe(value => {
			if (value) {
				let newCols = this.columns.value;
				newCols.push("delete");
				this.columns.next(newCols);
			} else {
				let newCols = this.columns.value.filter(col => col != 'delete');
				this.columns.next(newCols);
			}
		})
		this.userService.canPut.subscribe(value => {
			if (value) {
				let newCols = this.columns.value;
				newCols.push("update");
				this.columns.next(newCols);
			} else {
				let newCols = this.columns.value.filter(col => col != 'update');
				this.columns.next(newCols);
			}
		})
	}
}

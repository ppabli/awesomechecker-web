import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { TableService } from '../table.service';
import { UserService } from '../user.service';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {

	@Input('showActions') showActions: boolean = false;

	data: any[] = [];
	dataSource = new MatTableDataSource(this.data);

	displayedColumns: string[] = [];

	constructor(private tableService: TableService, private router: Router, private apiService: ApiService, private snackBar: MatSnackBar) {
		this.tableService.data.subscribe(newData => {
			this.updateData(newData);
		})
		this.tableService.columns.subscribe(cols => {
			this.displayedColumns = cols
		})
	}

	ngAfterViewInit(): void {

	}

	private updateData(data: any) {
		this.data = data;
		this.dataSource = new MatTableDataSource(this.data);
		this.changeSort()
	}

	@ViewChild(MatSort) sort: MatSort;

	changeSort() {
		this.dataSource.sort = this.sort;
	}

	redirect(route: string, id: number) {
		let path = this.router.url.split('/')[1];
		this.router.navigate([`${path}/${route}/${id}`])
	}

	deleteData(id: number) {
		let path = this.router.url.split('/')[1];
		let deleteRoute = `/${path}/${id}`;
		this.apiService.delete(deleteRoute).subscribe({
			next: (res: any) => {
				console.log(res);
				this.data = this.data.filter(data => data.id != id);
				this.tableService.data.next(this.data);
				this.snackBar.open('Item done', '', {
					duration: 1500,
				});
			}
		})
	}

}

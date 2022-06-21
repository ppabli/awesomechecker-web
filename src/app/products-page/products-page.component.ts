import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../api.service';
import { CustomBarService } from '../custom-bar.service';
import { Product } from '../product.model';

@Component({
	selector: 'app-products-page',
	templateUrl: './products-page.component.html',
	styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

	products: Product[] = [];

	format: string;

	loading: boolean;

	searchText: string = '';

	displayedColumns: string[] = ['id', 'name', 'createdTimestamp','lastUpdateTimestamp'];
	dataSource = new MatTableDataSource(this.products);

	constructor(private apiService: ApiService, private customBarService: CustomBarService) {
		this.customBarService.format.subscribe(newFormat => this.format = newFormat);
		this.customBarService.searchValue.subscribe(newText => {
			this.searchText = newText;
			this.changeSort();
		})
		this.apiService.loading.subscribe(loading => this.loading = loading);
	}

	ngOnInit() {
		this.apiService.loading.next(true);
		this.apiService.get('/products').subscribe({
			next: (res: any) => {
				this.products = res.data.map((p: any) => new Product(p));
				this.dataSource = new MatTableDataSource(res.data);
				this.apiService.loading.next(false);
				this.customBarService.dataLength.next(this.products.length);
			}
		});
	}

	@ViewChild(MatSort) sort: MatSort;

	changeSort() {
		let temp = this.products.filter(p => p.name.toLowerCase().includes(this.searchText));
		this.dataSource = new MatTableDataSource(temp);
		this.dataSource.sort = this.sort;
	}

}

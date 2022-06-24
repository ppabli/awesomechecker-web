import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CustomBarService, FormatType } from '../custom-bar.service';
import { Product } from '../product.model';
import { TableService } from '../table.service';
import { UserService } from '../user.service';

@Component({
	selector: 'app-products-page',
	templateUrl: './products-page.component.html',
	styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent {

	products: Product[] = [];
	format: any;

	loading: boolean;

	displayedColumns: string[] = ['id', 'name', 'createdTimestamp', 'lastUpdateTimestamp', 'info'];

	constructor(private apiService: ApiService, private customBarService: CustomBarService, private userService: UserService, private tableService: TableService) {
		this.customBarService.format.subscribe(newFormat => {
			this.format = newFormat
		});
		this.userService.activeTeam.subscribe(newTeam => {
			this.loadData();
		})
		this.customBarService.searchValue.subscribe(newSearch => {
			this.updateData(newSearch);
		});
		this.tableService.columns.next(this.displayedColumns);
	}

	private updateData(value: string) {
		let temp = this.products.filter(p => p.name.includes(value));
		this.customBarService.data.next(temp);
		this.tableService.data.next(temp);
	}

	private loadData() {
		this.loading = true;
		this.apiService.get('/products').subscribe({
			next: (res: any) => {
				this.products = res.data.map((p: any) => new Product(p));
				this.customBarService.data.next(this.products);
				this.tableService.data.next(this.products);
				this.userService.updateActions();
				this.loading = false;
			}
		});
	}

}

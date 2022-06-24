import { Component, OnInit, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, TitleStrategy } from '@angular/router';
import { ApiService } from '../api.service';
import { CustomBarService } from '../custom-bar.service';
import { ProductPage } from '../product-page.model';
import { Product } from '../product.model';
import { Review } from '../review.model';
import { Team } from '../team.model';

@Component({
	selector: 'app-product-detail-page',
	templateUrl: './product-detail-page.component.html',
	styleUrls: ['./product-detail-page.component.scss', '../app.component.scss'],
	viewProviders: [MatExpansionPanel]
})
export class ProductDetailPageComponent implements OnInit {

	product: Product;
	productTeam: Team;
	productPages: ProductPage[];

	loading: boolean;

	reviews: Review[] = [];
	loadingReviews: boolean = false;

	panelOpenState: boolean = false;

	constructor(private apiService: ApiService, private route: ActivatedRoute, private customBarService: CustomBarService, private snackBar: MatSnackBar) {
		this.apiService.loading.subscribe(loading => this.loading = loading);
	}

	ngOnInit(): void {
		this.loadData();
	}

	loadReviews() {
		this.loadingReviews = true;
		this.apiService.get('/reviews?productPageId=' + this.productPages.map(pp => pp.id)).subscribe({
			next: (res: any) => {
				this.reviews = res['data'].map((rev: any) => new Review(rev));
				this.loadingReviews = false;
			}
		})
	}

	navigate(url: string): any {
		window.open(url, '_blank');
	}

	getFileName(url: string) {
		let name = url.split("/")[2];
		let customName = name.split("www.");
		if (customName[0] == '') {
			name = customName[1];
		} else {
			name = customName[0]
		}
		return name
	}

	private loadData() {
		this.apiService.loading.next(true);
		this.route.params.subscribe(p => {
			this.apiService.get('/products?id=' + p['id']).subscribe({
				next: (res: any) => {
					this.product = new Product(res['data'][0]);
					this.apiService.get('/teams?id=' + this.product.teamId).subscribe({
						next: (res: any) => {
							this.productTeam = new Team(res['data'][0]);
							this.apiService.get('/productPages?productId=' + this.product.id).subscribe({
								next: (res: any) => {
									this.productPages = res['data'].map((pp: any) => {
										return new ProductPage(pp);
									})
									console.log(this.productPages)
									this.apiService.loading.next(false);
								}
							})
						}
					})
				}
			})
		})
	}

}

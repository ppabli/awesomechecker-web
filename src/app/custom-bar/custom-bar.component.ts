import { Component, Input, OnInit } from '@angular/core';
import { CustomBarService } from '../custom-bar.service';

@Component({
	selector: 'app-custom-bar',
	templateUrl: './custom-bar.component.html',
	styleUrls: ['./custom-bar.component.scss', '../app.component.scss']
})
export class CustomBarComponent implements OnInit {

	@Input('length') length: number;

	format: string;
	searchText: string

	pageSize: number = 10;
	pageSizes: number[] = [5, 10, 25, 100]

	dataLength: number;

	constructor(private customBarservice: CustomBarService) { }

	ngOnInit(): void {

		this.customBarservice.format.subscribe(newFormat => this.format = newFormat);
		this.customBarservice.searchValue.subscribe(newSearchValue => this.searchText = newSearchValue);
		this.customBarservice.dataLength.subscribe(newDataLength => this.dataLength = newDataLength);

	}

	changeFormat(newMode: string) {

		this.customBarservice.format.next(newMode);

	}

	changeSearchValue(event: any) {
		this.customBarservice.searchValue.next(event.target.value);
	}

}

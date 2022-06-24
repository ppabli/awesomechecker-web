import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomBarService, FormatType } from '../custom-bar.service';
import { UserService } from '../user.service';

@Component({
	selector: 'app-custom-bar',
	templateUrl: './custom-bar.component.html',
	styleUrls: ['./custom-bar.component.scss', '../app.component.scss']
})
export class CustomBarComponent implements OnInit {

	@Input('formatSelector') formatSelector: boolean = false
	@Input('searchBar') searchBar: boolean = false
	@Input('createButton') createButton: boolean = false
	@Input('paginator') paginator: boolean = false

	formats = FormatType;

	format: FormatType;

	pageSize: number = 10;
	pageSizes: number[] = [5, 10, 25, 100]

	data: any[] = [];
	canCreate: boolean

	constructor(private customBarservice: CustomBarService, private userService: UserService) {
		this.customBarservice.format.subscribe(newFormat => this.format = newFormat);
		this.customBarservice.data.subscribe(newData => {
			this.data = newData;
		})
		this.userService.canPost.subscribe(value => {
			this.canCreate = value
		})
	}

	ngOnInit(): void {
		this.customBarservice.format.subscribe(newFormat => this.format = newFormat);
		this.userService.canPost.subscribe(value => {
			this.canCreate = value
		})
	}

	changeFormat(newMode: FormatType) {
		this.customBarservice.format.next(newMode);
	}

	changeSearchValue(event: any) {
		this.customBarservice.searchValue.next(event.target.value);
	}

}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomBarService } from '../custom-bar.service';
import { Rol } from '../rol.model';
import { UserService } from '../user.service';

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

	canCreate: boolean = false;

	constructor(private customBarservice: CustomBarService, private userService: UserService, private router: Router) { }

	ngOnInit(): void {

		this.customBarservice.format.subscribe(newFormat => this.format = newFormat);
		this.customBarservice.searchValue.subscribe(newSearchValue => this.searchText = newSearchValue);
		this.customBarservice.dataLength.subscribe(newDataLength => this.dataLength = newDataLength);
		this.userService.activeRoles.subscribe((roles: Rol[]) => {
			let url = this.router.url.split("/")[1];
			let validRoles = roles.filter((rol: Rol) => {
				return rol.getPostPermissions()[url];
			})
			if (validRoles.length) {
				this.canCreate = true;
			}
		})

	}

	changeFormat(newMode: string) {

		this.customBarservice.format.next(newMode);

	}

	changeSearchValue(event: any) {
		this.customBarservice.searchValue.next(event.target.value);
	}

}

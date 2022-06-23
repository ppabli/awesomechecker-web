import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-error-page',
	templateUrl: './error-page.component.html',
	styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

	time: number = 5;
	route: string = '/'

	constructor(private router: Router) { }

	ngOnInit(): void {

		setInterval(() => {
			this.time--;
			if (this.time == 0) {
				this.router.navigate([this.route]);
			}
		}, 1000)

	}

}

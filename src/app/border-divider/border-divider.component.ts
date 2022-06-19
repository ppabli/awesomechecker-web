import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-border-divider',
	templateUrl: './border-divider.component.html',
	styleUrls: ['./border-divider.component.scss']
})
export class BorderDividerComponent implements OnInit {

	@Input() marginTopSize: number;
	@Input() marginBottomSize: number;

	constructor() { }

	ngOnInit(): void {

	}

	getTopMargin(): string {

		return `${this.marginTopSize}px`;

	}

	getBottomMargin(): string {

		return `${this.marginBottomSize}px`;

	}

}

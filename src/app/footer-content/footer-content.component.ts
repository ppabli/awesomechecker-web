import { Component, Input, OnInit } from '@angular/core';
import { LocaleService } from '../locale.service';

@Component({
	selector: 'app-footer-content',
	templateUrl: './footer-content.component.html',
	styleUrls: ['./footer-content.component.scss', '../app.component.scss']
})
export class FooterContentComponent implements OnInit {

	options: string[]
	optionSelected: string

	@Input() visibleComponents: { [key: string]: boolean } = {};

	constructor(private localeService: LocaleService) {
		this.options = this.localeService.getAvailableLocales();
		this.optionSelected = this.localeService.getPreferedLocale();
	}

	ngOnInit(): void {

	}

	changeLocale(locale: string) {
		this.localeService.setPreferedLocale(locale);
	}

}

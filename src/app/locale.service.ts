import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
	providedIn: 'root'
})
export class LocaleService {

	private availableLocales = [
		'en_UK', 'es_ES'
	];
	private preferedLocale: string;

	constructor(private translate: TranslateService, private localStorage: LocalStorageService) {
		this.init();
	}

	public init() {

		this.preferedLocale = this.localStorage.getItem('preferedLocale') || this.availableLocales[0];
		this.setPreferedLocale(this.preferedLocale);

	}

	public getPreferedLocale(): string {
		return this.preferedLocale;
	}

	public getAvailableLocales(): string[] {
		return this.availableLocales;
	}

	public setPreferedLocale(locale: string): void {
		this.preferedLocale = locale;
		this.localStorage.setItem('preferedLocale', locale);
		this.translate.setDefaultLang(locale);
	}

	public getTranslateService(): TranslateService {
		return this.translate;
	}

}

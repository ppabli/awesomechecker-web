import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { LocaleService } from './locale.service';
import { SidenavService } from './sidenav.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

	@ViewChild('sidenav') public sidenav: MatSidenav;

	constructor(private localeService: LocaleService, private sidenavService: SidenavService) {
		this.localeService.init();
	}

	ngAfterViewInit(): void {
		this.sidenavService.setSidenav(this.sidenav);
	}

}

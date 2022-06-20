import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './../sidenav.service';

@Component({
	selector: 'app-default-layout',
	templateUrl: './default-layout.component.html',
	styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit, AfterViewInit {

	@ViewChild('sidenav') public sidenav: MatSidenav;

	constructor(private sidenavService: SidenavService) { }

	ngOnInit(): void {


	}

	ngAfterViewInit(): void {
		this.sidenavService.setSidenav(this.sidenav);
	}

}

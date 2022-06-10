import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LocalStorageService } from './local-storage.service';
import { LocaleService } from './locale.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavService } from './sidenav.service';
import { FooterComponent } from './footer/footer.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { MatButtonModule } from '@angular/material/button';

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
  SidenavMenuComponent,
  ToolbarComponent,
  FooterComponent,
  DefaultPageComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatIconModule,
		MatSidenavModule,
		MatButtonModule,
		MatIconModule,
		HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: (HttpLoaderFactory),
				deps: [HttpClient]
			}
		})
	],
	providers: [
		LocaleService,
		LocalStorageService,
		SidenavService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

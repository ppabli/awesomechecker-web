import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LocalStorageService } from './local-storage.service';
import { LocaleService } from './locale.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavService } from './sidenav.service';
import { DefaultPageComponent } from './default-page/default-page.component';
import { MatButtonModule } from '@angular/material/button';
import { LoginPageComponent } from './login-page/login-page.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { BorderDividerComponent } from './border-divider/border-divider.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { FooterContentComponent } from './footer-content/footer-content.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
	declarations: [
		AppComponent,
		SidenavMenuComponent,
		ToolbarComponent,
		DefaultPageComponent,
		LoginPageComponent,
		DefaultLayoutComponent,
		BorderDividerComponent,
		FooterContentComponent,
		ErrorPageComponent,
  ProductsPageComponent,
	],
	imports: [
		ReactiveFormsModule,
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatIconModule,
		MatSidenavModule,
		MatButtonModule,
		MatIconModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatGridListModule,
		MatListModule,
		MatDividerModule,
		HttpClientModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatStepperModule,
		MatSnackBarModule,
		MatSelectModule,
		MatCheckboxModule,
		MatMenuModule,
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

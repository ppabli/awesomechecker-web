import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptorService } from './auth-interceptor.service';
import { BorderDividerComponent } from './border-divider/border-divider.component';
import { CustomBarComponent } from './custom-bar/custom-bar.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FooterContentComponent } from './footer-content/footer-content.component';
import { LocalStorageService } from './local-storage.service';
import { LocaleService } from './locale.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';
import { SidenavService } from './sidenav.service';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoadingComponent } from './loading/loading.component';

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
		CustomBarComponent,
  LoadingComponent
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
		MatTableModule,
		MatMenuModule,
		MatPaginatorModule,
		MatSortModule,
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
		SidenavService,
		{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

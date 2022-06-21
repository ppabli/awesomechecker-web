import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { RequiredLoginGuard } from './required-login.guard';

const routes: Routes = [
	{
		path: '', component: DefaultLayoutComponent, children: [
			{ path: '', component: DefaultPageComponent },
			{ path: 'products', component: ProductsPageComponent, canActivate: [RequiredLoginGuard] }
		]
	},
	{ path: 'login', component: LoginPageComponent, pathMatch: 'full' },
	{ path: '**', component: ErrorPageComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { TableModule } from './Components/table/table.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { apiAuthenticationInterceptor } from './Interceptors/api-authentication.interceptor';
import { EditProductComponent } from './Components/modal/edit-product/edit-product.component';
import { loadingInterceptor } from './Interceptors/loading.interceptor';
import { LoadingSpinnerComponent } from './Components/loading-spinner/loading-spinner.component';
import { ToastContainerComponent } from './Components/toast/toast-container/toast-container.component';
import { ToastComponent } from './Components/toast/toast.component';

@NgModule({
	imports: [
		BrowserModule,
		TableModule,
		RouterOutlet,
		HttpClientModule,
		EditProductComponent,
		LoadingSpinnerComponent,
		ToastContainerComponent,
		ToastComponent,
	],
	declarations: [AppComponent],
	exports: [],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: apiAuthenticationInterceptor,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: loadingInterceptor,
			multi: true,
		},
	],

	bootstrap: [AppComponent],
})
export class AppModule {}

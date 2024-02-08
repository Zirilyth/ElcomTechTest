import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { TableModule } from './Components/table/table.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { apiAuthenticationInterceptor } from './Interceptors/api-authentication.interceptor';
@NgModule({
  imports: [BrowserModule, TableModule, RouterOutlet, HttpClientModule],
  declarations: [ AppComponent],
  exports:      [  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: apiAuthenticationInterceptor, multi: true }],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

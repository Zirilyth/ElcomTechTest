import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfiguration } from "read-appsettings-json";
@Injectable()
export class apiAuthenticationInterceptor implements HttpInterceptor {


	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const apiToken = AppConfiguration.Setting()['Application']['API_KEY']
		const modifiedReq = req.clone({
			headers: req.headers
				.set('api_key', `${apiToken}`)
				.set('Access-Control-Allow-Origin', '*'),
		});
		return next.handle(modifiedReq);
	}

}

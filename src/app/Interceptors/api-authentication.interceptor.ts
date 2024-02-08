import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class apiAuthenticationInterceptor implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const userToken = '***REMOVED***'; const modifiedReq = req.clone({
			headers: req.headers
				.set('Authorization', `${userToken}`)
				.set('Access-Control-Allow-Origin','*'),
		});
		return next.handle(modifiedReq);
	}

};

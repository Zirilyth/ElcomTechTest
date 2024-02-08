import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class apiAuthenticationInterceptor implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const userToken = '46F0B613-A331-42CE-B9EF-0096BB1F3547'; const modifiedReq = req.clone({
			headers: req.headers
				.set('Authorization', `${userToken}`)
				.set('Access-Control-Allow-Origin','*'),
		});
		return next.handle(modifiedReq);
	}

};

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from '../Services/loading.service';
import { inject, Injectable } from '@angular/core';

@Injectable()
export class loadingInterceptor implements HttpInterceptor {

	private _loadingService = inject(LoadingService);
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		this._loadingService.show()
		return next.handle(req).pipe(
			finalize(() => this._loadingService.hide())
		);
	}

};

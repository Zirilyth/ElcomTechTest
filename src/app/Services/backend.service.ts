import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastService } from './toast.service';

@Injectable({
	providedIn: 'root'
})
export class BackendService {


	constructor(
		private http: HttpClient,
		private toastService:ToastService,
	) {
	}
	public addProduct(product:Product) {
		return this.http.post('/CRUDExample/add-product',{...product}).pipe(
			catchError(this.handleAPIError('Add Product'))
		)
	}

	public getProducts() {
		return this.http.get<Product[]>('/CRUDExample/get-products').pipe(
			catchError(this.handleAPIError<Product[]>('Get Products'))
		);
	}

	public editProduct(product: Product) {
		return this.http.put<Product[]>(
			'/CRUDExample/edit-product',
			{...product},
			{headers: {'content-type': 'application/json'}}
		).pipe(
			catchError(this.handleAPIError<Product[]>('Editing Product'))
		);
	}

	public deleteProduct(productUid: number) {
		return this.http.delete('/CRUDExample/remove-product',
			{
				params: {'ProductUId': productUid}
			}
		).pipe(
			catchError(this.handleAPIError('Deleting Product'))
		);
	}


	private handleAPIError<T>(operation = 'operation', result?: T) {
		return (error: Error): Observable<T> => {
			this.toastService.show({
				title:'Error',
				message:error.message,
				classname:'bg-danger text-light',
				delay:10000

			})
			console.error(operation, ': ', error);
			return of(result as T);
		};
	}
}


export interface Product {
	productUId: number,
	productCode: string,
	productName: string,
	productDescription: string,
	manufactureCode: string,
	manufactureName: string,
	manufactureDescription: string,
	cartonQty: number,
	available: boolean,
}

import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class BackendService {


	constructor(private http: HttpClient) {
	}


	public getProducts() {
		return this.http.get<Product[]>('/CRUDExample/get-products').pipe(
			catchError(this.handleAPIError<Product[]>('Get Products'))
		);
	}

	public editProduct(product: Product) {
		console.log(product);
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
		return (error: any): Observable<T> => {
			console.error(operation, ': ', error);
			return of(result as T);
		};
	}
}


export interface Product {
	productUId: string,
	productCode: string,
	productName: string,
	productDescription: string,
	manufactureCode: string,
	manufactureName: string,
	manufactureDescription: string,
	cartonQty: number,
	available: boolean,
}

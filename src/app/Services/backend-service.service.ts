import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {



  constructor(private http: HttpClient) { }



  public getProducts() {
      return this.http.get<any[]>('/api/get-products').pipe(
        map((response) => response),
        tap((response) => console.log(response))

      )
  }
}


interface product {
  name:string,
  quantity:number
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {



  constructor(private http: HttpClient) { }


  baseurl:string = 'https://test.evolve-s2p.com/CRUDExample'
  public getProducts() {
      return this.http.get<product[]>(this.baseurl + '/get-products').pipe(
        map((response) => response),
        tap(console.log)

      )
  }
}


interface product {
  name:string,
  quantity:number
}

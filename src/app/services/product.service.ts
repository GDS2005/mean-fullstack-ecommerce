import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductResults } from '../../app/interfaces/product'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService { 

  constructor(private http: HttpClient ) { }
  
    getProductList(): Observable<ProductResults> {
      return this.http.get<ProductResults>('http://localhost:8080/products');
    }  
  }

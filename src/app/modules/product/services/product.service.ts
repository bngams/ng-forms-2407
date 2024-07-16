
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root' // root context => available everywhere
})
export class ProductService {

  // TODO: make private, use method to access
  // setters, getters....
  // private products ...
  products: Product[] = [];

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  loadProducts() {
    this.http.get('https://dummyjson.com/products').subscribe({
      // TODO: replace any
      next: (response: any) => {
        this.products = response.products;
      }
      // error
      // complete
    }).unsubscribe();
  }

  getProducts(): Observable<any>  {
    return this.http.get<any>('https://dummyjson.com/products');
  }

  getProductsWithType(): Observable<Product[]>  {
    return this.http.get<any>('https://dummyjson.com/products')
        .pipe(
          map(response => response.products) // transform
        );
  }

}

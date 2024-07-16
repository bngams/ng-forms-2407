
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root' // root context => available everywhere
})
export class ProductService {

  products: Product[] = [];

}

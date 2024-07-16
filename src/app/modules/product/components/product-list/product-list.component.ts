import { Component } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: Product[] = [
    { title: 'Produit 1', price: 10 },
    { title: 'Produit 2', price: 20 },
    { title: 'Produit 3', price: 30 },
  ];
}

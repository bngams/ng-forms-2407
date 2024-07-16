import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  @Input()
  productsInput!: Product[];

  protected products: Product[] = [
    { title: 'Produit 1', price: 10 },
    { title: 'Produit 2', price: 25 },
    { title: 'Produit 3', price: 30 },
  ];

  addProduct(product: Product): void {
    this.products.push(product);
    // 
  }
}

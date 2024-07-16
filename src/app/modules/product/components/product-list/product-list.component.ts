import { Component, Input, OnInit, inject } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {

  @Input()
  productsInput!: Product[];

  protected products: Product[] = [
    { title: 'Produit 1', price: 10 },
    { title: 'Produit 2', price: 25 },
    { title: 'Produit 3', price: 30 },
  ];

  readonly productService = inject(ProductService);

  ngOnInit(): void {
    // this.productService.product$.subscribe((value) => {
    // });
  }

  addProduct(product: Product): void {
    this.products.push(product);
    //
  }
}

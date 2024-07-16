import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../models/product';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrl: './product-dashboard.component.scss'
})
export class ProductDashboardComponent implements OnInit, AfterViewInit {

  // @ViewChild('app-product-list') => <app-product-list>
  // @ViewChild('myProductList') => <... #myProductList>
  @ViewChild(ProductListComponent)
  productListComponent!: ProductListComponent;

  productsForInput: Product[] = [
    { title: 'Produit 1', price: 10 },
    { title: 'Produit 2', price: 25 },
    { title: 'Produit 3', price: 30 },
  ];

  constructor(private productService: ProductService) {
    console.log('CONSTRUCTOR: This is @ViewChild productListComponent', this.productListComponent);
  }

  ngOnInit() {
    console.log('ngOnInit: This is @ViewChild productListComponent', this.productListComponent);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit: This is @ViewChild productListComponent', this.productListComponent);
  }

  addProduct(product: Product) {
    this.productsForInput.push(product);
    this.productListComponent.addProduct(product);
  }

}

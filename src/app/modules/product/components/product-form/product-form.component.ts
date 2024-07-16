import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

enum SUBMIT_MODE {
  OUTPUT,
  SERVICE_ATTR,
  SERVICE_SUBJECT,
  SERVICE_BEHAV_SUBJECT
}

/**
 * Allow to handle generic typed form
 * Source: https://betterprogramming.pub/how-to-build-a-strongly-typed-angular-14-super-form-86837965a0e5
 */
// TODO: put in a separated file and better location
export type ControlsOf<T extends Record<string, any>> = {
  // title: FormControl<string>;
  [K in keyof T]: T[K] extends Record<any, any>
  ? FormGroup<ControlsOf<T[K]>>
  : FormControl<T[K]>;
};

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

  private submitMode = SUBMIT_MODE.OUTPUT;

  @Output()
  productSubmit = new EventEmitter<Product>();

  // create object form
  // untyped => new UntypedFormGroup({
  // with type => new FormGroup (since angular 14/15)
  productForm = new UntypedFormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl(0, [Validators.required, Validators.min(1)])
  });

  // DI
  constructor(private productService: ProductService) { }

  submit(): void {
    // let vs const
    const product: Product = this.productForm.value; // { title: value, price: value} => Product
    // emit output
    this.productSubmit.emit(product);
    // via service
    this.productService.products.push(product);
  }
}

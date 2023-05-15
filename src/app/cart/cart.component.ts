import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(
    private cartService: CartService,
    private formbuilder: FormBuilder
  ) {}

  items = this.cartService.getItems();

  checkoutform = this.formbuilder.group({
    name: '',
    address: '',
  });

  OnSubmit(): void {
    this.items = this.cartService.clearCart();
    console.log(this.checkoutform.value.name);
    this.checkoutform.reset();
  }
}

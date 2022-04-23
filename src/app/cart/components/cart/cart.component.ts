import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  amount: number = 0

  // will use async pipe in html , that will susbcribe from totalItems and render on UI
  totalItems$ : Observable<number>; 

  grandTotal : number = 0;

  // type inference, toggleCheckout is boolean variable, 
  toggleCheckout = true

  // injecting service into cart component
  // angular will create instance for service automatically, manages the life cycle of the service
  // using private prevent some dev using them in views directly, AOT compilation will raise error
  constructor(private cartService: CartService) {
    console.log("CartComponent created...")

    // copy by value
    this.amount = this.cartService.amount // initial value
    this.totalItems$ = this.cartService.totalItems$
   }

  ngOnInit(): void {
    // good place to susbcribe 
    // value is passed from next function
    // updated value
    // for Subject, subscribe is called ONLY when next is called
    this.cartService.amount$.subscribe ( value => {
      console.log("Amount susbcribed is ", value)
        this.amount = value;
    })
  }

  addItem() {
    const id = Math.ceil(Math.random() * 100000)
    const qty = Math.ceil(Math.random() * 10)
    const price = Math.ceil(Math.random() * 100)

    const item = new CartItem(id, `Product ${id}`, price, qty)
    this.cartService.addItem(item)
  }

  emptyCart() {
    this.cartService.empty()
  }

}

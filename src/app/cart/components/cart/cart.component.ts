import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  amount: number = 100
  totalItems : number = 10
  grandTotal : number = 0;

  // type inference, toggleCheckout is boolean variable, 
  toggleCheckout = false

  // injecting service into cart component
  // angular will create instance for service automatically, manages the life cycle of the service
  // using private prevent some dev using them in views directly, AOT compilation will raise error
  constructor(private cartService: CartService) {
    console.log("CartComponent created...")
   }

  ngOnInit(): void {
  }

}

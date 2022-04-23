import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CheckoutService } from '../../services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  // this limit CheckoutService instance exclusive to CheckoutComponent
  providers: [CheckoutService]
})
export class CheckoutComponent implements OnInit {

  constructor(private cartService: CartService, 
              private checkoutService: CheckoutService) { 
    console.log("CheckoutComponent created")
  }
 
  ngOnInit(): void {
  }

}

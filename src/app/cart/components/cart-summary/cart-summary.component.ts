import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {

  amount: number = 100
  totalItems: number = 10
  // in percentage
  discount: number = 0
  grandTotal: number = 0
  coupon: string = ''

  constructor() { }

  calculate(): void {
    this.grandTotal = Math.floor(this.amount - (this.amount * this.discount) / 100.0)
  }

  ngOnInit(): void {
    this.calculate()
  }

  // called on button click
  // event binding in html using ()
  // Event from html5, tsconfig.json, we can see lib dom
  applyCoupon(e: Event, coupon: string) {
    console.log("Event is ", e)

    if (coupon == 'apply5') {
      this.discount = 5.0
    }
    else if (coupon == 'apply10') {
      this.discount = 10.0
    } else {
      this.discount = 0
    }

    this.calculate()
  }

}

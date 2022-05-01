import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

// Input : pass data from parent to child aka Property Binding []
// cart is parent component for cart-summary
// passing data from parent to child using property binding
// property binding using []
// must decorate input for member variables in child to receive parameters

// Output: Call parent: from child to parent aka Ouput binding ()
// must be used with EventEmitter

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit, OnChanges {

  @Input()
  amount: number = 0

  @Input()
  totalItems: number = 0

  // in percentage
  discount: number = 0

  @Input()
  grandTotal: number = 0

  // eventBinding
  // Change is special suffix after input name, used for two way binding [()]
  // the event value is number type, can be referenced in html as $event
  // child to parent communication
  // child component shall publish event, parent component susbcribe and add event handler 
  @Output() 
  grandTotalChange: EventEmitter<number> = new EventEmitter ()

  @Input()
  coupon: string = ''

  constructor() { }

  calculate(): void {
    console.log("This coupon is ", this.coupon)

    if (this.coupon == 'apply1') {
      this.discount = 1.0
    } else 
    if (this.coupon == 'apply5') {
      this.discount = 5.0
    }
    else if (this.coupon == 'apply10') {
      this.discount = 10.0
    } else {
      this.discount = 0
    }

    this.grandTotal = Math.floor(this.amount - (this.amount * this.discount) / 100.0)

    // emit the event
    this.grandTotalChange.emit(this.grandTotal)
  }

  ngOnInit(): void {
    console.log("Coupon is ", this.coupon)
    this.calculate()
  }

  // called on button click
  // event binding in html using ()
  // Event from html5, tsconfig.json, we can see lib dom
  applyCoupon(e: Event, coupon: string) {
    console.log("Event is ", e)

    this.coupon = coupon;
    this.calculate()
  }


  // called whenver input properties value got changed
  ngOnChanges(changes: SimpleChanges): void {
     console.log("cart Summary on changes ", changes)

     if (changes['amount'].previousValue !== changes['amount'].currentValue) {
       // custom code here to react on amount change
     }
      
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { City } from '../../models/city';
import { Order } from '../../models/order';
import { State } from '../../models/state';
import { CartService } from '../../services/cart.service';
import { CheckoutService } from '../../services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  // this limit CheckoutService instance exclusive to CheckoutComponent
  providers: [CheckoutService]
})
export class CheckoutComponent implements OnInit, OnDestroy {
  order: Order = new Order()

  states: State[] = [];
  cities$: Observable<City[]>;

  susbcription: Subscription = null

  constructor(private cartService: CartService, 
              private checkoutService: CheckoutService) { 
    console.log("CheckoutComponent created")
  }
 
  ngOnInit(): void {
    //TODO: unsusbcribe
    this.susbcription =  this.checkoutService.getStates()
        .subscribe( states => {
           console.log("states data ", states)
           this.states = states;
        })
  }

  loadCities(stateId: number) {
    console.log('loading cities for ', stateId)
    // observables
    this.cities$ = this.checkoutService.getCities(stateId)
  }


  checkout() {
    this.order.amount = this.cartService.amount
    this.order.totalItems = this.cartService.totalItems
    this.order.items = this.cartService.items
    console.log("order ", this.order)

    this.checkoutService.checkout(this.order)
        .subscribe ( savedOrder => {
          console.log("Saved order is ", savedOrder)
        })
  }


    ngOnDestroy(): void {
      console.log("checkout ngOnDestroy")
      if (this.susbcription) {
        this.susbcription.unsubscribe()
        this.susbcription = null
      }
    }
}

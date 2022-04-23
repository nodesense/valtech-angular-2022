import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';

// service instances created on need basic
// service is place to have application state/centralized state for application independent of component
// when user navigate, component may be deleted or recreated so values inside component will be lost, but data in services remain in memory
// use service for business logic
// use service for api communication with micro/web services
// services can be injected into another service/component/pipe/directives

// 1. service instance can be global and singleton OR
// 2. service instance can be specific to a component and its child hierarchy, service instance will be terminated when component terminated
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private amount: number = 0
  private totalItems = 0

  items: CartItem[] = []

  calculate() {
    let s = 0, t = 0;
    
    for (const item of this.items) {
      s += item.price * item.qty;
      t += item.qty;
    }

    this.amount = s;
    this.totalItems = t;

    console.log("amount ", this.amount)
    console.log("totalItems ", this.totalItems)
  }

  addItem(item: CartItem) {
    // mutation: changing original object
    this.items.push(item)

    this.calculate();
  }

  removeItem(id: number) {
    // mutation
    const index = this.items.findIndex(item => item.id === id)
    this.items.splice(index, 1) // remove 1 item from index
    
    this.calculate();
  }

  empty() {
    // mutation
    this.items.splice(0, this.items.length)
    
    this.calculate();
  }

  constructor() { 
    console.log("CartService created")
  }
}

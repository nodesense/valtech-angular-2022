import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';

import {Subject, BehaviorSubject} from 'rxjs';

// Subject doesn't take default value, so subscriber is not called until next/publish called
// BehaviorSubject takes default value, susbcriber called immediately with default value/latest value, then also called after while calling next

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
  // primitives
  private _amount: number = 0
  private _totalItems = 0

  // object
  items: CartItem[] = []

  // good practice to declare Rxjs observables with $ sign at end
  amount$: BehaviorSubject<number> = new BehaviorSubject(this._amount)
  totalItems$: BehaviorSubject<number> = new BehaviorSubject(this._totalItems)
  items$: BehaviorSubject<CartItem[]> = new BehaviorSubject(this.items)

  // ES6 feature, setter and getter part of es6 
  // setter is called when we assigne values
  // this.amount = 10
  set amount(value: number) {
    if (value < 0) return;
    // initialize value
    this._amount = value;

    // we are publishing value for amount$, amount$ is observable,
    // value is what published, who ever susbcribed for amount$ observable, can get published values
    // as callback
    this.amount$.next(value);
  }

  //getter is called when we use amount
  // console.log (this.amount) // calls getter for amount
  // discount = this.amount * .90 [calls getter for amount]
  get amount() {
    return this._amount
  }

  set totalItems(value: number) {
    if (value < 0) return;
    this._totalItems = value;
    // publish values 
    this.totalItems$.next(value)
  }

  get totalItems() {
    return this._totalItems;
  }

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
    // this.items.push(item)

    // immutable way of adding items into array
    // clone existing items and add item to new array, so that original array is not modified

    this.items = [...this.items, item]

    this.calculate();

    this.items$.next(this.items)
  }

  removeItem(id: number) {
    // mutation
    // const index = this.items.findIndex(item => item.id === id)
    // this.items.splice(index, 1) // remove 1 item from index
    
    // immutable way of removing item from array
    // use filter method, filter all the items except the one we don't want
    // return new array 
    this.items = this.items.filter (item => item.id !== id)

    this.calculate();
    this.items$.next(this.items)
  }

  empty() {
    // mutation
    // this.items.splice(0, this.items.length)

    // immutable empty, is just assign new array
    this.items = []
    
    this.calculate();
    this.items$.next(this.items)
  }

  constructor() { 
    console.log("CartService created")
  }
}

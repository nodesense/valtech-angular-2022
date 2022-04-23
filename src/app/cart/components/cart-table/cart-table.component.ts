import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.scss']
})
export class CartTableComponent implements OnInit {
  
  items: CartItem[]; 

  constructor(private cartService: CartService) { 
    console.log("CartTableComponent created")

    // remember, in cart, we are mutating items
    // items is reference in cartService
    this.items = this.cartService.items;
  }

  ngOnInit(): void {
  }

  deleteItem(id: number) {
    console.log('id is ', id)
    this.cartService.removeItem(id)
  }

}

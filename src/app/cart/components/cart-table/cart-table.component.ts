import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.scss']
})
export class CartTableComponent implements OnInit {
  
  items$: Observable<CartItem[]>; 

  constructor(private cartService: CartService) { 
    console.log("CartTableComponent created")
 
    this.items$ = this.cartService.items$;
  }

  ngOnInit(): void {
  }

  deleteItem(id: number) {
    console.log('id is ', id)
    this.cartService.removeItem(id)
  }

}

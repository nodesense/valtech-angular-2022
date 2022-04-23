import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.scss']
})
export class CartTableComponent implements OnInit {

  constructor(private cartService: CartService) { 
    console.log("CartTableComponent created")
  }

  ngOnInit(): void {
  }

}

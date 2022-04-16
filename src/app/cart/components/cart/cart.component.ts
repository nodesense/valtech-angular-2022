import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  amount: number = 100
  totalItems : number = 10
  grandTotal : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}

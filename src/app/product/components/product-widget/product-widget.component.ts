import { Product } from './../../models/product';
import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { CartItem } from 'src/app/cart/models/cart-item';

@Component({
  selector: 'app-product-widget',
  templateUrl: './product-widget.component.html',
  styleUrls: ['./product-widget.component.css']
})
export class ProductWidgetComponent implements OnInit {

  @Input()
  product: Product;

  constructor(private cartService: CartService) {

  }

  ngOnInit() {
  }

  addToCart(product: Product) {
    let item = new CartItem(product.id, 
                            product.name, 
                            product.price, 
                            1);

    this.cartService.addItem(item)
  }

}

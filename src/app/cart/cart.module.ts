import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartTableComponent } from './components/cart-table/cart-table.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SharedModule } from '../shared/shared.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    CartComponent, 
    CartSummaryComponent, 
    CartTableComponent, 
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  exports: [
    CartComponent
  ]
})
export class CartModule { }

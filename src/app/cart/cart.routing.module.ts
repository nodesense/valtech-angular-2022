import { NgModule } from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import { AuthGuard } from '../auth/guards/auth.guard'
import { CartComponent } from './components/cart/cart.component'
import { CheckoutComponent } from './components/checkout/checkout.component'

const routes: Routes = [
    {
        path: 'cart', // 
        component: CartComponent
    },
    {
        path: 'cart/checkout', //  
        component: CheckoutComponent,
     //   canActivate: [AuthGuard]
    }
]

@NgModule({
    imports: [
        // forChild include only directives/components, not services related to routing
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class CartRoutingModule {}
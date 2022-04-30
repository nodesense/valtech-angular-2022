// module
import { NgModule } from "@angular/core";
// BrowserModule has all features needed for html5 browsers
// while importing BrowserModule, it automatically imports CommonModule
import {BrowserModule} from '@angular/platform-browser';

// . means current directory, .. means parent directory
import {AppComponent} from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SharedModule } from "./shared/shared.module";
import { CartModule } from "./cart/cart.module";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from "./app.routing";
import { RouterModule } from "@angular/router";
// import { ProductModule } from "./product/product.module";
import { AuthModule } from "./auth/auth.module";

// Module is collection/registry of components, services, directives, pipes
// and dependencies on other modules
// and exports of pipe, components, directives which can be reused in 
// other modules
// by default, components, directives, pipes are private to this module
// to use in other module, we need to export them

@NgModule({
    // for dependencies on other modules
    //   angular modules, 3rd party libraries, or your project modules
    imports: [
        BrowserModule,
        SharedModule,
        CartModule,
      //  ProductModule, // now lazy loaded, look for routing module
        AuthModule,
        AppRoutingModule,
        
    ],

    declarations: [
        // anything we use from html to be registered here
        // register components, pipes and directives here
        AppComponent,
        HomeComponent,
        AboutComponent,
        HeaderComponent,
        FooterComponent,
        NotFoundComponent,
         
    ],

    // used in main.ts, bootStrapModule
    bootstrap: [
        AppComponent // only the app component
    ]
})
export class AppModule {
    // app module initialization code here
}

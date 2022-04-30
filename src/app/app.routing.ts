import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
    {
        path: '', // home page
        component: HomeComponent
    },

    {
        path: 'about', //about page
        component: AboutComponent
    },

    
    {
        path: 'products',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
    },

    {
        path: '**',
        component: NotFoundComponent
    }
]

@NgModule({
    imports: [
        // forRoot is static function, that returns a module included with routes
        // forRoot includs directives, components, many services
        // forRoot used only once, forChild used for each module
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule   // here it re-exports RouterModule exports , any exports in RotuerModule is autoamtically exported
    ]
})
export class AppRoutingModule {

}

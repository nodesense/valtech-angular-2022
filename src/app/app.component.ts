import {Component} from '@angular/core';

//decorator, useful for meta data
// used by angular runtime
@Component({
    // Angular component html tag to be used in app

    selector: 'app-root', // html component tag
    templateUrl: 'app.component.html', // view
    styleUrls: [ 
        // styles isolation, the style is used only within component
        'app.component.scss'
    ] 
})
export class AppComponent {
    // data model for data binding
    title: string = 'Product App'
    // theme is a string type, type is inferred automatically
    //  from right expression
    theme = 'light'
}
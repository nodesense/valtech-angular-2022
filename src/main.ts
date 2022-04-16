// bootstrap file
// the entry file, typescript will pick for compilation
// the first time to be run inside browser
// bootstrap angular application into browser

import {platformBrowserDynamic} 
            from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';

console.log("bootstrapping Angular")

// This load AppModule, while loading appModule, 
// its load all dependencies modules of app module and modules modules
// in JIT mode, it compiles all component's view ie HTML into JavaScript
// Look for AppModule bootstrap to load the main component ie AppComponent
// then look for selector for bootstrap component in the DOM [index.html]
// then creates app component instance and display on html etc...
platformBrowserDynamic()
            .bootstrapModule(AppModule)


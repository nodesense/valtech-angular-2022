# to clone the repo


open command prompt or terminal

```
  git clone https://github.com/nodesense/valtech-angular-2022

  cd valtech-angular-2022

  npm install


  ng serve
```



# Setup 

1. Node.js 
2. Visual Studio Code

  2.1 Node.js setup

        Open Command prompt/terminal

```
node -v
```



to uninstall angular cli previous versions
```
npm uninstall @angular/cli -g
```

after uninstall angular cli, close command prompt

on Windows Start menu,
type Run command

inside Run shell, %APPDATA%

On Windows Start button, 

to install angular 9 latest

```
npm install @angular/cli@^9.1.15 -g
```

close command prompt

Open new command prompt

```
ng version 
```

create a new angular project

open commmand prompt

```
c:\users\yourname> ng new product-app 
```
```

? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? SCSS 
```

Angular creates a project
angular cli downloads npm packages/dependencies for angular project

```
cd:\users\yourname> cd product-app

cd:\users\yourname\product-app> ng serve 
```

open your brower chrome/edge [not IE] http://localhost:4200

```

Visual Studio Code - Free, From Microsoft


# Angular app

Any angular app needs 
    one module - register components, dependencies, etc
    one component [ts, html, css]
    main.ts for bootstrap
    index.html for initial SPA



# Using Angular cli to create components modules pipes etc

Adding modules, components, resue components etc 

open command prompt

```
cd product-app
```

create 2 components home page, about page

below command create a folder called components under app directory,
then create a folder for home component, update app.module automatically

the component name shall be prefixed with app-, app is from angular.json prefix

spec.js is unit test case

```
ng generate component components/home

ng g   c  components/about
```

## generate shared module

reusable code that can be used anywhere

will create  a folder called shared under app and create a module called shared

```
ng generate module shared
```

create few components inside shared modules

```
ng g   c  shared/components/page-like

ng g  directive shared/directives/highlight

ng g pipe shared/pipes/sort
ng g pipe shared/pipes/filter

```

# Feature Module 

Application feature can be seperate modules like orm module, account module, payrole module, invoice module etc

```
ng g m cart
ng g c cart/components/cart
ng g c cart/components/cart-summary
ng g c cart/components/cart-table
ng g c cart/components/checkout

ng g service cart/services/cart


ng g service cart/services/checkout

ng g class cart/models/cart-item

ng g class cart/models/order

ng g interface cart/models/address

```


Pipe - Transformation of values for display purpose 
       precision 3.34 or 3.45678
       currncy $ 3.34
       Date 4/23/2022 or other way
       custom pipes like sorting, filtering
       

# ProductApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.15.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

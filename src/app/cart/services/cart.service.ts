import { Injectable } from '@angular/core';

// service is place to have application state/centralized state for application independent of component
// when user navigate, component may be deleted or recreated so values inside component will be lost, but data in services remain in memory
// use service for business logic
// use service for api communication with micro/web services
// services can be injected into another service/component/pipe/directives

// 1. service instance can be global and singleton OR
// 2. service instance can be specific to a component and its child hierarchy, service instance will be terminated when component terminated
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { 
    console.log("CartService created")
  }
}

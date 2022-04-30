import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
 
@Directive({
  selector: '[appAppAdmin]'
})
export class AppAdminDirective implements OnInit {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef, 
    private authService: AuthService
    ) { }

    isAdmin = false;
    hasView = false;
    ngOnInit(): void {
       this.authService.authStatus.subscribe( status => {
         if ( status &&  this.authService.hasRole("admin")) {
           this.viewContainer.createEmbeddedView(this.templateRef);
           this.hasView = true;
         }
         else {
           this.isAdmin = false;
           if ( this.hasView) {
            this.viewContainer.clear();
            this.hasView = false;
          }
         }

        
       })
    }

}



@Directive({ selector: '[appUnless]'})
export class UnlessDirective {
}
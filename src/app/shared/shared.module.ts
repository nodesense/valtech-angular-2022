import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLikeComponent } from './components/page-like/page-like.component';
import { HighlightDirective } from './directives/highlight.directive';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { AppAdminDirective } from './directives/app-admin.directive';



@NgModule({
  // by default, components, pipes and directives in declarations are private to this module only
  // they cannot be used outside module
  // to use components, pipes, directives outside module, we need to export them
  declarations: [
    PageLikeComponent, 
    HighlightDirective, 
    SortPipe, 
    FilterPipe,
  AppAdminDirective
  ],
  imports: [
    CommonModule
  ],

  // exported components, pipes and directives can be used outside module
  // export shall be subset of declarations
  exports: [  
    PageLikeComponent, 
    HighlightDirective, 
    SortPipe, 
    FilterPipe,
    AppAdminDirective
  ]

})
export class SharedModule { }

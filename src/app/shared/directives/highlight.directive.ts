import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

// attribute directive
// when mouse over on any dom element, we want to highlight the color
// <h1 appHighlight />
// h1 is host element that host appHighlight directive
// directives doesn't have tempplates
// directives can have Output, Input
// to apply colors, we need host element object like div, h2, ... ElementRef
// ElementRef a wrapper aroudn dom elemnt, which can be injected automatically into directive
// Renderer2 is a service that provide simple DOM manipulation code like
//   Add attribute, remove attributes, add style, remove styles
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input()
  color: string = ''

  constructor(private hostElement: ElementRef, 
              private renderer: Renderer2
    ) {
    console.log("Highlight directive created")
   }
 
   ngOnInit(): void {
    console.log("highlight directive ngOnInit")   
    console.log("Color is ", this.color) 
    // nativeElement is the REAL DOM element
    console.log("Directive tag", this.hostElement.nativeElement.tagName)
   }

   // events, occurs on host elements, like div, h2, etc tag
   @HostListener("mouseenter")
   onMouseEnter() {
      console.log("mouse enter")
      this.renderer.setStyle(this.hostElement.nativeElement, 
                              "background",
                              this.color)
   }

   @HostListener("mouseleave")
   onMouseLeave() {
    console.log("mouse leave")
    this.renderer.removeStyle(this.hostElement.nativeElement, 
      "background")
   }
}

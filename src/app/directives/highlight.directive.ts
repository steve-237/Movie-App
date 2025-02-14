import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @HostBinding('class.highlight')
  highlight: boolean = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight = false;
  }
}

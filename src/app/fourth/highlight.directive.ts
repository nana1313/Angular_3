import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlightWithRadiosTwo = '';
  @Input() defaultColor = '';
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlightWithRadiosTwo || this.defaultColor || 'red');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  constructor(private el: ElementRef) { }
  highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
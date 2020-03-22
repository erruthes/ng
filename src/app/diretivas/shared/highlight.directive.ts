import { Directive, HostListener, ElementRef, Renderer2, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() defaultColor = 'white';
  @Input('appHighlight') highlightColor = 'grey';

  @HostBinding('style.backgroundColor') backgroundColor: string;
  // @HostBinding('style.backgroundColor') get setColor() {
  //   return this.backgroundColor;
  // }
  // backgroundColor: string;

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
    ) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}

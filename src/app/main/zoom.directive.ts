import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[zoom]'
})
export class ZoomDirective {
  @Input('zoomSize') size;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseIn() {
    this.setFontSize(this.size);
  }

  @HostListener('mouseleave') onMouseOut() {
    this.setFontSize(120);
  }

  setFontSize(value: number | string): void {
    this.el.nativeElement.style.fontSize = `${value}%`;
  }
}

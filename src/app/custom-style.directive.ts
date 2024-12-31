import { Directive } from '@angular/core';
import { ElementRef , Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]',
  standalone: true
})
export class CustomStyleDirective {

  constructor(private obj: ElementRef, private renderer: Renderer2) {

    this.renderer.setStyle(this.obj.nativeElement, 'backgroundColor', 'yellow');
    
    this.renderer.setStyle(this.obj.nativeElement, 'fontWeight', 'bold');
  }

}

import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMostrarMes]'
})
export class MostrarMesDirective {

  constructor(private e: ElementRef, private r: Renderer2) { }

  @Input('appMostrarMes') elementMostrar!: any[];

  @HostListener('mouseenter')
  entrarMouse(){
    this.e.nativeElement.querySelector('#rank').classList.remove('d-none');
  }

  @HostListener('mouseleave')
  salirMouse(){
    this.e.nativeElement.querySelector('#rank').classList.add('d-none');
  }

}

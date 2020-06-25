import { Directive, ElementRef, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appFundoAmarelo]' //Se eu quiser só o paragráfo de fundo amarelo escrevo p[appFundoAmarelo], se for só o botão escrevo button na frente, e assim por diante.
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
    ) { 
    //console.log(this._elementRef);
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';   //(menos seguro)
    this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
  }

}

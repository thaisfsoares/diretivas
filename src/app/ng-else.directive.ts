import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgElse]'
})
export class NgElseDirective {

  @Input() set ngIf(condition: boolean) {
    if (!condition) {
      this._viewContainerRef.createEmbeddedView(this._templateREf);
    } else {
      this._viewContainerRef.clear();
    }

  }
  
  constructor(
    private _templateREf: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) { }
}


import { Directive, Input, ViewContainerRef, ComponentFactoryResolver, OnChanges, OnDestroy } from '@angular/core';
/*
  This is used to dynamically load the navbar's for each portal.
  If this doesn't work with a component then you might need to explicitly declare the component as an entryComponent
  e.g.
  @NgModule({
    ...
    entryComponents: [
      NavbarComponent,
    ],
*/
@Directive({
  selector: '[appComponentFactory]'
})
export class ComponentFactoryDirective implements OnChanges, OnDestroy {
  @Input() component: string;

  private componentRef: any;
  private loaded: boolean;

  constructor(private _viewContainerRef: ViewContainerRef,
              private _componentFactoryResolver: ComponentFactoryResolver) {
    this.loaded = false;
  }

  ngOnChanges() {
    if (this.loaded || !this.component) {
      return;
    }

    const factories = Array.from(this._componentFactoryResolver['_factories'].keys());
    const componentClass: any = factories.find((x: any) => x.key === this.component);
    if (!componentClass) {
        console.log('failed to find the component [' + this.component + '].');
    }

    const factory = this._componentFactoryResolver.resolveComponentFactory(componentClass);
    const compRef = this._viewContainerRef.createComponent(factory);

    if (this.componentRef) {
      this.componentRef.destroy();
    }

    this.componentRef = compRef;
    this.loaded = true;
  }

  public ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}

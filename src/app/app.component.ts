import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <p>Lazy Loading Application</p>
      <button (click)="loadLazy1()">Load Lazy1</button>
      <button (click)="loadLazy2()">Load Lazy2</button>
    </div>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'lazyDemo';

  constructor(private viewContainerRef: ViewContainerRef,
      private rcf: ComponentFactoryResolver) {

  }

  async loadLazy1() {
    // this.viewContainerRef.clear();
    const { Lazy1Component } = await import('./lazy1.component');
    this.viewContainerRef.createComponent(
      this.rcf.resolveComponentFactory(Lazy1Component)
    )
  }

  async loadLazy2() {
    this.viewContainerRef.clear();
    const { Lazy2Component } = await import('./lazy2.component');
    this.viewContainerRef.createComponent(
      this.rcf.resolveComponentFactory(Lazy2Component)
    )
  }
}

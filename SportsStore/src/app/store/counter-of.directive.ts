import { Directive, Input, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[counterOf]'
})
export class CounterOfDirective {

  constructor(private container: ViewContainerRef,private template: TemplateRef<Object>) { }
  
  @Input("counterOf")
  counter: number;
  
  ngOnChanges(changes: SimpleChanges): void {
    //当页数发生变化时，会删除已经创建的所有内容，并重新创建内容
    this.container.clear();
    for (let i = 0; i < this.counter; i++){
      this.container.createEmbeddedView(this.template, new CounterDirectiveContext(i + 1));
    }
  }
}

class CounterDirectiveContext{
  constructor(public $implicit: any){};
}

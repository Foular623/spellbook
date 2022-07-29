import { NgModule } from '@angular/core';
import { ComponentsPipe } from './components/components.pipe';
import { DescPipe } from './desc/desc.pipe';


@NgModule({
  declarations: [
    ComponentsPipe,
    DescPipe
  ],
  exports: [
    ComponentsPipe,
    DescPipe
  ]
})
export class PipesModule { }

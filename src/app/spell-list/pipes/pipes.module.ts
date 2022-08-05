import { NgModule } from '@angular/core';
import { ComponentsPipe } from './components.pipe';
import { DescPipe } from './desc.pipe';
import { ClassIconPipe } from './class-icon.pipe';
import { SpellLevelPipe } from './spell-level.pipe';


@NgModule({
  declarations: [
    ComponentsPipe,
    DescPipe,
    ClassIconPipe,
    SpellLevelPipe
  ],
  exports: [
    ComponentsPipe,
    DescPipe,
    ClassIconPipe,
    SpellLevelPipe
  ]
})
export class PipesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { DialogService } from 'primeng/dynamicdialog';
import { SpellListRoutingModule } from './spell-list-routing.module';
import { MainComponent } from './pages/main/main.component';
import { TabSpellComponent } from './components/tab-spell/tab-spell.component';
import { TabContentComponent } from './components/tab-content/tab-content.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DialogSpellComponent } from './components/dialog-spell/dialog-spell.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PipesModule } from './pipes/pipes.module';


@NgModule({
  declarations: [
    MainComponent,
    TabSpellComponent,
    TabContentComponent,
    ToolbarComponent,
    DialogSpellComponent
  ],
  imports: [
    CommonModule,
    SpellListRoutingModule,
    AngularMaterialModule,
    PipesModule
  ],
  entryComponents: [
    DialogSpellComponent
  ],
  providers: [
    ConfirmationService,
    DialogService,
    MessageService
  ]
})
export class SpellListModule { }

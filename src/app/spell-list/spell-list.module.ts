import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { DialogAddEditComponent } from './components/dialog-add-edit/dialog-add-edit.component';


@NgModule({
  declarations: [
    MainComponent,
    TabSpellComponent,
    TabContentComponent,
    ToolbarComponent,
    DialogSpellComponent,
    DialogAddEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    FormBuilder,
    MessageService
  ]
})
export class SpellListModule { }

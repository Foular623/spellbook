import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Spell } from 'src/app/model/spell.model';

import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { SpellListService } from 'src/app/services/spell-list.service';

import { DialogService } from 'primeng/dynamicdialog';
import { DialogSpellComponent } from '../dialog-spell/dialog-spell.component'
import { DialogAddEditComponent } from '../dialog-add-edit/dialog-add-edit.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html'
})
export class TabContentComponent implements OnInit, OnDestroy {

  @Input() level: number = 0

  spells: Spell[] = [];
  selectedSpell!: Spell;
  subscription!: Subscription

  constructor( 
    private primengConfig:      PrimeNGConfig,
    private spellList:          SpellListService,
    private dialogService:      DialogService,
    private confirmation:       ConfirmationService,
    private message:            MessageService
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    console.log("Creado")
    this.subscription = this.spellList.$observable.subscribe(() => {
      this.reloadSpell();
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  reloadSpell(): void {
    this.spells = this.spellList.getSpellsByLevel(this.level);
  }

  viewSpell(spell: Spell) {
    
    const ref = this.dialogService.open(DialogSpellComponent, {
      header: spell.Name,
      width: '70%',
      data: {
        "spell": spell
      }
    })

 
  }

  editSpell(spell: Spell){
    const ref = this.dialogService.open(DialogAddEditComponent, {
      header: `Editar: ${spell.Name}`,
      width: '70%',
      data: {
        "spell": spell
      }
    })

    ref.onClose.subscribe((result: string[]) => {
       this.showSuccess(`El conjuro ${ result[1] } a sido modificado con exito.` );
    });
  }

  deleteSpell(spell: Spell){

    this.confirmation.confirm({
      message: `¿Estas seguro de querer eliminar el conjuro ${ spell.Name }?`,
      key: spell.ID.toString() ,
      accept: () => {
        this.spellList.deleteSpell(spell);
        this.showSuccess(`El conjuro ${ spell.Name } a sido eliminado con exito.` );
      }
    });
  }
  
  showSuccess(message: string) {
    this.message.add({severity:'success', summary: 'Exito', detail: message});
  }
  
  

}

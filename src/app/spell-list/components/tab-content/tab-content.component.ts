import { Component, Input, OnInit } from '@angular/core';
import { Spell } from 'src/app/model/spell.model';

import { ConfirmationService, MessageService } from 'primeng/api';
import { SpellListService } from 'src/app/services/spell-list.service';

import { DialogService } from 'primeng/dynamicdialog';
import { DialogSpellComponent } from '../dialog-spell/dialog-spell.component'
import { DialogAddEditComponent } from '../dialog-add-edit/dialog-add-edit.component';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.css']
})
export class TabContentComponent implements OnInit {

  @Input() level: number = 0

  spells: Spell[] = [];
  selectedSpell!: Spell;

  constructor( 
    private spellList:          SpellListService,
    private dialogService:      DialogService,
    private confirmation:       ConfirmationService,
    private message:            MessageService
  ) { }

  ngOnInit(): void {
    this.reloadSpell();
  }

  reloadSpell(): void {
    this.spellList.getSpellsByLevel(this.level).subscribe(
      (x) => {
        this.spells = x;
        console.log(this.spells);
      }
    )
  }

  viewSpell(name: string) {
    
    const ref = this.dialogService.open(DialogSpellComponent, {
      header: name,
      width: '70%',
      data: {
        "name": name
      }
    })

 
  }

  editSpell(spell: Spell){
    const ref = this.dialogService.open(DialogAddEditComponent, {
      header: `Editar: ${spell.Name}`,
      width: '70%',
      data: {
        "spell": spell.Name
      }
    })

    // ref.onClose.subscribe(() => {
    //   //this.selectedSpell = ""
    // });
  }

  deleteSpell(spell: Spell){

    this.confirmation.confirm({
      message: `¿Estas seguro de querer eliminar el conjuro ${ spell.Name }?`,
      key: spell.Name + ' - ' + spell.Level ,
      accept: () => {
        this.spellList.deleteSpell(spell);
        this.reloadSpell();
        this.showSuccess(`El conjuro ${ spell.Name } a sido eliminado con exito.` );
      }
    });
  }
  
  showSuccess(message: string) {
    this.message.add({severity:'success', summary: 'Success', detail: message});
  }
  
  

}

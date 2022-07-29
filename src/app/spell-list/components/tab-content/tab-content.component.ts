import { Component, Input, OnInit } from '@angular/core';
import { Spell } from 'src/app/model/spell.model';

import { ConfirmationService } from 'primeng/api';
import { SpellListService } from 'src/app/services/spell-list.service';

import { DialogService } from 'primeng/dynamicdialog';
import { DialogSpellComponent } from '../dialog-spell/dialog-spell.component'

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
    private confirmation:       ConfirmationService
  ) { }

  ngOnInit(): void {
    this.spellList.getSpellsByLevel(this.level).subscribe(
      (x) => {
        this.spells = x;
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

    // ref.onClose.subscribe(() => {
    //   //this.selectedSpell = ""
    // });
  }

  editSpell(name: string){}

  deleteSpell(name: string){

    this.confirmation.confirm({
      message: `¿Estas seguro de querer eliminar el conjuro ${ name }?`,
      accept: () => {
        console.log(name);
      }
    });
  }

  

}

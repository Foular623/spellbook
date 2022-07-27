import { Component, Input, OnInit } from '@angular/core';
import { Spell } from 'src/app/model/spell.model';
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
    private spellList:         SpellListService,
    private dialogService:     DialogService
  ) { }

  ngOnInit(): void {
    this.spellList.getSpellsByLevel(this.level).subscribe(
      (x) => {
        this.spells = x;
      }
    )
  }

  onRowUnselect(event: any) {
    console.log(event);
  }

  onRowSelect(event: any) {
    
    const ref = this.dialogService.open(DialogSpellComponent, {
      header: "Header",
      width: '70%'
    })

    ref.onClose.subscribe(() => {
      //this.selectedSpell = ""
    });
  }

}

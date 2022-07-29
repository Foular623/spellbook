import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Spell } from 'src/app/model/spell.model';
import { SpellListService } from 'src/app/services/spell-list.service';

@Component({
  selector: 'app-dialog-spell',
  templateUrl: './dialog-spell.component.html'
})
export class DialogSpellComponent implements OnInit {

  currentSpell!: Spell | boolean;

  constructor(
    private spellListService: SpellListService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) { }

  ngOnInit(): void {
    if (this.config.header) {
      const name = this.config.header
      this.currentSpell = this.spellListService.getSpellByName(name)

    }
    
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

import { DataDndSpellService } from 'src/app/services/data-dnd-spell.service';
import { SpellListService } from 'src/app/services/spell-list.service';

import { ClassList, LevelList, SchoolSpellsList } from '../../../model/lists-dnd';
import { Spell } from 'src/app/model/spell.model';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-dialog-add-edit',
  templateUrl: './dialog-add-edit.component.html'
})
export class DialogAddEditComponent implements OnInit {

  spell2?: Spell; // CAmbiar

  levels:   LevelList[]         = [];
  classes:  ClassList[]         = [];
  schools:  SchoolSpellsList[]  = [];

  formSpell: FormGroup = this.fb.group({
    CastTime: [ '', [Validators.required, Validators.minLength(3)] ],
    Classes: this.fb.array([], Validators.required ), // List
    Components: [], // Checkboxs
    Desc: ['', Validators.required],
    Duration: ['', Validators.required ],
    IsRitual: [ false ], // Booleas
    Level: [ 0 , Validators.required], // Number
    Name: ['', Validators.required],
    Range: ['', Validators.required],
    School: ['', Validators.required] // List
  });

  constructor(
    private spellListService: SpellListService,
    private fb:               FormBuilder,
    private lists:            DataDndSpellService,
    private primengConfig:    PrimeNGConfig,
    public  ref:              DynamicDialogRef,
    public  config:           DynamicDialogConfig
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.levels = this.lists.getListSpellsLevel();
    this.classes = this.lists.getListClasses();
    this.schools = this.lists.getListSchoolSpells();

    if (this.config.header) {
      const name = this.config.header;
      this.spellListService.getSpellByName(name).subscribe((x) => {
        this.spell2 = x;
      });
    }
  }

}

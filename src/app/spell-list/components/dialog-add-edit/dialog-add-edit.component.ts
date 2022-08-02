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

  levels:         LevelList[]         = [];
  classes:        ClassList[]         = [];
  schools:        SchoolSpellsList[]  = [];
  currentSpell?:  Spell;


  formSpell: FormGroup = this.fb.group({
    CastTime: [ '', [Validators.required, Validators.minLength(3)] ],
    Classes: [[''], Validators.required], // List
    VComponent: [ false ],
    SComponent: [ false ],
    MComponent: [ false ],
    Material: [ '' ],
    SRD: [ false ],
    Desc: ['', Validators.required],
    Duration: ['', Validators.required ],
    IsRitual: [ false ], // Booleas
    Level: [ 0 , Validators.required], // Number
    Name: ['', Validators.required],
    Range: ['', Validators.required],
    School: ['', Validators.required], // List
    AtHighLevel: [''], // List
    Concentration: [ false ], // List
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

    if (this.config.data.spell) {
      this.currentSpell = this.config.data.spell;
      this.jsonToFormSpell(this.currentSpell!);
    }

  }

  checkMaterial() {
    if (this.formSpell.controls['MComponent'].value) this.formSpell.controls['Material'].enable()
    else this.formSpell.controls['Material'].disable()
  }
  
  jsonToFormSpell(spell: Spell): void {
    this.formSpell.controls['Name'].setValue(spell.Name);
    this.formSpell.controls['CastTime'].setValue(spell.CastTime);
    this.formSpell.controls['Range'].setValue(spell.Range);
    
    this.formSpell.controls['Level'].setValue(spell.Level);
    this.formSpell.controls['School'].setValue(spell.School);
    
    this.formSpell.controls['IsRitual'].setValue(spell.IsRitual);
    
    this.formSpell.controls['VComponent'].setValue(spell.Components.V);
    this.formSpell.controls['SComponent'].setValue(spell.Components.S);
    this.formSpell.controls['MComponent'].setValue(spell.Components.M);
    this.formSpell.controls['Material'].setValue(spell.Components.MDetails);
    
    if (!this.formSpell.controls['MComponent'].value) this.formSpell.controls['Material'].disable()
    
    const duration: string[] = spell.Duration.split(', up to '); // Separar de concententracion
    if (duration[0] === "Concentration") {
      this.formSpell.controls['Concentration'].setValue(true);
      this.formSpell.controls['Duration'].setValue(duration[1]);
    }
    else this.formSpell.controls['Duration'].setValue(duration[0]);
    
    
    let clases = spell.Classes.split(",");
    if (clases.filter((x) => x.trim() === "SRD").length === 1) this.formSpell.controls['SRD'].setValue(true);
    
    clases = clases.filter(((x) => x.trim() !== "SRD"));
    this.formSpell.controls['Classes'].setValue(clases.map( y => {return y.trim()}));
    
    const desc = spell.Desc.split("|||")
    this.formSpell.controls['Desc'].setValue(desc[0].replace("|", "\n").replace("||", "\n\n"));

    if (desc.length > 1) this.formSpell.controls['AtHighLevel'].setValue(desc[1].replace("|", "\n").replace("||", "\n\n").replace("At higher level: ", ""));


  }

  saveSpell() {
    this.spellListService.saveSpell(this.currentSpell, this.formSpell);
  }

  // prueba() {
  //   console.log(this.formSpell.controls['Desc'].value)
  // }

}

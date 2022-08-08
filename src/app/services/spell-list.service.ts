import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { Spell, SpellData } from '../model/spell.model';
import { IpcServiceService } from './ipc-service.service'
//import listJson from './spellList.json';

@Injectable({
  providedIn: 'root'
})
export class SpellListService {

  // Me llega por peticion
  private list: SpellData[] = [];
  private loadList: Spell[] = [];

  private _eventReload = new BehaviorSubject(false);
  public $observable = this._eventReload.asObservable();
  
  constructor( 
    private IpcService: IpcServiceService
  ) { 
    this.IpcService.send("getSpellList");
    this.IpcService.on("getSpellList", (x: any, data: SpellData[]) => {
        this.list = data;
        this.loadList = this.list.map(( spell, index) => Spell.spellDesdeJson(spell, index));
        this._eventReload.next(true);
    });
    //this.loadList = this.list.map(( spell, index) => Spell.spellDesdeJson(spell, index))
  }


  uploadList() {
    this.IpcService.send("postSpellList", this.loadList);
  }


  getSpellsByLevel(level: number): Spell[] {
    return this.loadList.filter( spell => spell.Level === level)
  }

  saveSpell(spell: Spell | undefined, form: FormGroup): string[] {
    let result: string[] = [];
    let action: string = "";
    let indice: number = 0;

    if (spell) {
      indice = this.loadList.findIndex( x => x.ID === spell.ID);
      this.loadList[indice] = Spell.spellDesdeFormGroup(form, indice);
      action = "edit";
    }
    else {
      indice = this.loadList.push(Spell.spellDesdeFormGroup(form, this.loadList.length));
      indice = indice-1;
      action = "new";
    }
    
    result = [action, this.loadList[indice].Name];
    
    this._eventReload.next(true);
    this.uploadList();
    return result;

  }

  deleteSpell(spell: Spell): boolean {
    this.loadList = this.loadList.filter((x) => x.ID !== spell.ID)
    this._eventReload.next(true);
    this.uploadList();
    return true;
  }

}

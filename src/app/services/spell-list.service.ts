import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BehaviorSubject, Observable } from 'rxjs';
import { Spell, SpellData } from '../model/spell.model';
import { IpcServiceService } from './ipc-service.service'

@Injectable({
  providedIn: 'root'
})
export class SpellListService {

  // Me llega por peticion
  private list: SpellData[] = [
    {
      "CastTime": "1 Action",
      "Classes": "Sorcerer, Wizard, Artificer, SRD",
      "Components": {
          "M": false,
          "MDetails": "",
          "S": true,
          "V": true
      },
      "Desc": "You hurl a bubble of acid. |Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage. |||At higher level: This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
      "Duration": "Instantaneous",
      "IsRitual": false,
      "Level": 0,
      "Name": "Acid Splash",
      "Range": "60 feet",
      "School": "Conjuration"
    },
    {
      "CastTime": "1 Action",
      "Classes": "Sorcerer, Warlock, Wizard, SRD",
      "Components": {
          "M": false,
          "MDetails": "",
          "S": true,
          "V": true
      },
      "Desc": "You create a ghostly, skeletal hand in the space of a creature within range. |Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target. If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn. |||At higher level: This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
      "Duration": "1 round",
      "IsRitual": false,
      "Level": 0,
      "Name": "Chill Touch",
      "Range": "120 feet",
      "School": "Necromancy"
    },
    {
      "CastTime": "1 Action",
      "Classes": "Sorcerer, Warlock, Wizard",
      "Components": {
          "M": false,
          "MDetails": "",
          "S": true,
          "V": true
      },
      "Desc": "You create a ghostly, skeletal hand in the space of a creature within range. |Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target. If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn. |At higher level: This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).|",
      "Duration": "1 round",
      "IsRitual": false,
      "Level": 1,
      "Name": "Chill Touch",
      "Range": "120 feet",
      "School": "Necromancy"
    },
    {
      "CastTime": "1 Action",
      "Classes": "Bard, Sorcerer, Wizard, Artificer, SRD",
      "Components": {
          "M": true,
          "MDetails": "a bit of phosphorus or wychwood, or a glowworm",
          "S": true,
          "V": true
      },
      "Desc": "You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. |You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius. ||As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell's range.",
      "Duration": "Concentration, up to 1 minute",
      "IsRitual": false,
      "Level": 0,
      "Name": "Dancing Lights",
      "Range": "120 feet",
      "School": "Evocation"
  },
  {
    "CastTime": "1 Action",
    "Classes": "Bard, Druid, Ranger, SRD",
    "Components": {
        "M": true,
        "MDetails": "a morsel of food",
        "S": true,
        "V": true
    },
    "Desc": "By means of this spell, you use an animal to deliver a message.|Choose a Tiny beast you can see within range, such as a squirrel, a blue ray, or a bat. You specify a location, which you must have visited, and a recipient who matches a general description, such as a man or woman dressed in the uniform of the town guard or a red-haired dwarf wearing a pointed hat. You also speak a message of up to twenty-five words. The target beast travels for the duration of the spell towards the specified location, covering about 50 miles per 24 hours for a flying messenger or 25 miles for other animals.||When the messenger arrives, it delivers your message to the creature that you described, replicating the sound of your voice. The messenger speaks only to a creature matching the description you gave. If the messenger doesn't reach its destination before the spell ends, the message is lost, and the beast makes it way back to where you cast this spell.|At higher level: If you cast this spell using a spell slot of 3rd level or higher, the duration of the spell increases by 48 hours for each slot level above 2nd.",
    "Duration": "24 hours",
    "IsRitual": true,
    "Level": 2,
    "Name": "Animal Messenger",
    "Range": "30 feet",
    "School": "Enchantment"
}
  ]
  // ------------------------------
  private loadList: Spell[] = [];

  private _eventReload = new BehaviorSubject(false);
  public $observable = this._eventReload.asObservable();
  
  constructor( 
    private IpcService: IpcServiceService
  ) { 
    this.loadList = this.list.map(( spell, index) => Spell.spellDesdeJson(spell, index))
  }



  reloadList(){
    // Recargo la lista de conjuros
  } // TODO: Hacer recarga de la lista cuando electron
  getList(){
    // Recargo la lista de conjuros
  } // TODO: Hacer recarga de la lista cuando electron
  updateList(){
    // mando la orden de hacer el update
    this.reloadList();
  } // TODO: Hacer UPDATE de la lista cuando electron

  // getSpellByName(name: string): Observable<Spell> {
  //   return new Observable<Spell>((observer) => {

  //     const result = this.list.find((x) => x.Name === name);
  
  //     if ( result ) {
  //       observer.next(Spell.spellDesdeJson(result, 1);
  //       observer.complete();
  //     }
  //   })
  // }

  getSpellByName(name: string): Observable<Spell> {
    return new Observable<Spell>((observer) => {

      const result = this.list.find((x) => x.Name === name);
  
      if ( result ) {
        observer.next(Spell.spellDesdeJson(result, 1));
        observer.complete();
      }
    })
  }

  getSpellsByLevel(level: number): Spell[] {
    return this.loadList.filter( spell => spell.Level == level)
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
    return result;

  }

  deleteSpell(spell: Spell): boolean {
    this.loadList = this.loadList.filter((x) => x.ID !== spell.ID)
    this._eventReload.next(true);
    return true;
  }

}

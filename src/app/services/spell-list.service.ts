import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Spell, SpellData } from '../model/spell.model';
import { IpcServiceService } from './ipc-service.service'

@Injectable({
  providedIn: 'root'
})
export class SpellListService {

  constructor( private IpcService: IpcServiceService ) { }

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
      "Desc": "You create a ghostly, skeletal hand in the space of a creature within range. |Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target. If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn. |At higher level: This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).|",
      "Duration": "1 round",
      "IsRitual": false,
      "Level": 0,
      "Name": "Chill Touch",
      "Range": "120 feet",
      "School": "Necromancy"
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
      "Desc": "You create a ghostly, skeletal hand in the space of a creature within range. |Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target. If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn. |At higher level: This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).|",
      "Duration": "1 round",
      "IsRitual": false,
      "Level": 1,
      "Name": "Chill Touch",
      "Range": "120 feet",
      "School": "Necromancy"
    }
  ]


  getSpellsByLevel(level: number): Observable<Spell[]> {
    return new Observable<Spell[]>((observer) => {
      observer.next(
        this.list.filter( spell => spell.Level == level)
        .map( spell => Spell.spellDesdeJson(spell))
      );
      observer.complete();
    })
  }

}

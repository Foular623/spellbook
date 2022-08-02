import { Injectable } from '@angular/core';
import { ClassList, LevelList, SchoolSpellsList } from '../model/lists-dnd';

@Injectable({
  providedIn: 'root'
})
export class DataDndSpellService {

  constructor() { }

  getListSpellsLevel(): LevelList[] {
    return [
      { name: "Cantrip", level: 0 },
      { name: "Nivel 1", level: 1 },
      { name: "Nivel 2", level: 2 },
      { name: "Nivel 3", level: 3 },
      { name: "Nivel 4", level: 4 },
      { name: "Nivel 5", level: 5 },
      { name: "Nivel 6", level: 6 },
      { name: "Nivel 7", level: 7 },
      { name: "Nivel 8", level: 8 },
      { name: "Nivel 9", level: 9 }
    ]
  }

  getListClasses(): ClassList[] {
    return [
      { name: 'Artificiero', value: 'Artificer'},
      { name: 'Bardo', value: 'Bard'}, //bar
      { name: 'Brujo', value: 'Warlock'}, // bru
      { name: 'Clerigo', value: 'Cleric'}, // cle
      { name: 'Druida', value: 'Druid'}, // drui
      { name: 'Explorador', value: 'Ranger'}, // exp
      { name: 'Hechicero', value: 'Sorcerer'}, // hechi
      { name: 'Mago', value: 'Wizard'}, // MAGO
      { name: 'Paladin', value: 'Paladin'}, // PALA
    ]
  }

  getListSchoolSpells(): SchoolSpellsList[] {
    return [
      { name: 'Abjuración', value: 'Abjuration'},
      { name: 'Adivinación', value: 'Divination'},
      { name: 'Conjuración', value: 'Conjuration'},
      { name: 'Encantamiento', value: 'Enchantment'},
      { name: 'Evocación', value: 'Evocation'},
      { name: 'Ilusionismo', value: 'Illusion'},
      { name: 'Nigromancia', value: 'Necromancy'},
      { name: 'Transmutación', value: 'Transmutation'},
    ]
  }
   
}

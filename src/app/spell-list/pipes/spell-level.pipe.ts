import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spellLevel'
})
export class SpellLevelPipe implements PipeTransform {

  transform(value: number): string {
    if (value > 0 ){
      return "Nivel " + value.toString();
    }
    else {
      return "Cantrip"
    }
  }

}

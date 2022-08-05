import { Pipe, PipeTransform } from '@angular/core';
import { Spell } from 'src/app/model/spell.model';

@Pipe({
  name: 'components'
})
export class ComponentsPipe implements PipeTransform {

  transform(value: Spell): string {
    const list = value.Components;

    let first: boolean = true;
    let result: string = "";

    if (list.V) {
      if (first) {
        result = "V";
        first = false;
      }
      else {
        result = result + ", V";
      }
    }
    if (list.S) {
      if (first) {
        result = "S";
        first = false
      }
      else {
        result = result + ", S";
      }
    }
    if (list.M) {
      if (first) {
        result = "M";
        first = false

        if (list.MDetails !== "" || list.MDetails !== undefined) {
          result = result + ` (${ list.MDetails })`;
        }
      }
      else {
        result = result + ", M";
        if (list.MDetails !== "" || list.MDetails !== undefined) {
          result = result + ` (${ list.MDetails })`;
        }
      }
    }
    return result;
  }

}

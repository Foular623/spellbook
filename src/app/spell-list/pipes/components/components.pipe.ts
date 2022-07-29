import { Pipe, PipeTransform } from '@angular/core';
import { Spell } from 'src/app/model/spell.model';

@Pipe({
  name: 'components'
})
export class ComponentsPipe implements PipeTransform {

  transform(value: Spell): string {
    const first: boolean = true;
    const list = [ value.Components]
    return 'xD';
  }

}

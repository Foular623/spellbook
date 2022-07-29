import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'desc'
})
export class DescPipe implements PipeTransform {

  transform(value: string, get?: "desc" | "highLvl"): string {
    const result: string = value.replace("|", "<br>").replace("|||", "<br><br><br>").replace("|A", "<br><br><br>A").replace(".|", ".").replace("At higher level:", "<b>At higher level:</b>");
 
    return result;
  }

}

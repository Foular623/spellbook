import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'desc'
})
export class DescPipe implements PipeTransform {

  reg = new RegExp(/[|]/g);

  transform(value: string, get?: "desc" | "highLvl"): string {
    const result: string = value.replace(this.reg, "<br>").replace("At higher level:", "<b>At higher level:</b>");
    return result;
  }

}

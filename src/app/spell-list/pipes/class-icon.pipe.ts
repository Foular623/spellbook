import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classIcon'
})
export class ClassIconPipe implements PipeTransform {

  transform(value: string): string {
    const classes: string[] = value.split(",").map((x) => {return x.trim()});
    let SRD: boolean = false
    let result: string = '';

    if (classes.includes('SRD')) { 
      SRD = true;
      classes.pop();
    }

    classes.sort();

    classes.forEach((y) => {
      result = result + `<img src='./assets/classes/${ y }.png' alt='${ y } class' width="37" height="37">`;
    });

    if(SRD) {
      result = result + `<img src='./assets/classes/SRD.png' alt='SRD' width="37" height="37">`;
    }

    return result;
  }

}

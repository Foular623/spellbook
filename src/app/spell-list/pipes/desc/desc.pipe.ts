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

// "You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. |You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius. ||As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell's range."
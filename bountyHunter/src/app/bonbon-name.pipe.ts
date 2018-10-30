import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bonbonName'
})
export class BonbonNamePipe implements PipeTransform {

  transform(bonbon_name: any): any {
    let arrayName = bonbon_name.split(' ');
    let name = "";
    if (arrayName.length > 4) {
      for (let i=0; i < 4; i++) {
        name += arrayName[i] + " ";
      }
      return name;
    } else {
      return bonbon_name;
    }
    
  }

}

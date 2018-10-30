import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[]): any[] {
  
    let result:any[];

    if (value[0] != null){
      for (let i=0; i< value.length; i++){
        result.push(value[i]);
    }
    return result;
    }


  }

}

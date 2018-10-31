import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'searchCandy'
})
export class SearchPipe implements PipeTransform {
  transform(products: any[], searchWord: string = ""): any {

    let result: any[] = [];
    console.log(products.length);
    let noResult: any[];


    for (let i = 0; i < products.length; i++) {
      console.log(searchWord);
      if (products[i] !== undefined && products[i].product_name.toLowerCase().indexOf(searchWord.toLowerCase()) > -1) {
        result.push(products[i]);
      }
    }
    if(result.length === 0) {
      // return [undefined];
    }
    return result;


  }
}

import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'searchCandy'
})
export class SearchPipe implements PipeTransform {

  transform(products: any[], searchWord: string = ""): any {

    const result: any[] = [];
    console.log(products.length);


    for (let i = 0; i < products.length; i++) {
      if (products[i] !== undefined && products[i].product_name.toLowerCase().indexOf(searchWord.toLowerCase()) > -1) {
        result.push(products[i]);
      }
    }

    console.log("coucou");

      return result;
  }
}

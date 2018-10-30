import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BonbonInfo } from "./bonbon-info";

@Injectable({
  providedIn: 'root'
})
export class InfoBonbonService {

  private service: Http;

  constructor(p_service: Http) {
    this.service = p_service;
  }

  public getBonbonInfo(param_search: string): Observable<Array<any>> {

    let url: string = "https://fr.openfoodfacts.org/cgi/search.pl?search_terms=";
    url += "" + param_search + "&page_size=100&json=1";

    const obs1: Observable<Response> = this.service.get(url);
    return obs1.pipe(
      map(
        (data: Response): any[] => {
          let raw: any = data.json();
          let products: Array<any> = raw.products;
          let i: number = products.length;
          let images: Array<any> = new Array<any>();
          console.log("ok");


          while (--i > -1) {
            images.push(//products[i].product_name);
              {
                "image_url": products[i].image_url,
                "product_name": products[i].product_name,
                "brands": products[i].brands,
                "ingredients_text": products[i].ingredients_text,
                "nova_group": products[i].nova_group,
                "nutrition_grade_fr": products[i].nutrition_grade_fr,
                "stores": products[i].stores,
                "packaging": products[i].packaging,
                "countries": products[i].countries,
                "quantity": products[i].quantity,
                "id": products[i].id,
                "generic": products[i].generic_name_fr
              }
            );
          }

          return images;

        }
      )
    );
  }
}

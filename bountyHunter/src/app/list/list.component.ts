import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public candiesLists:any[]=[
    {
      "name":"Haribo",
      "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmUtYXec86sf9Kfjqor140LELj5edM8EzANq8poCrvLt7LpnjL"
    },
    {
      "name":"M&Ms",
      "img":"https://www.bonbonz.be/377-large_default/bonbons-haribo-pico-balla.jpg"
    },
    {
      "name":"Tagada",
      "img":"https://www.espace-bonbon.fr/808-thickbox_default/berlingot-provencaux.jpg"
    },
    {
      "name":"Lolilo",
      "img":"https://www.dragees-massardier.fr/boutique/images_produits/bisou_fraise-z.jpg"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}



import { Component, OnInit } from '@angular/core';

declare var TweenMax:any;
declare var Power4:any;

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

  public candyNumber:number = 0;

  constructor() { }

  ngOnInit() {
  }

  candyUp(){
    if (this.candyNumber <99 ) {
      this.candyNumber ++;
    }
  }
  candyDown(){
    if ( this.candyNumber > 0) {
      this.candyNumber --;
    }  
  }

  goTop(){
    let pos = parseInt(window.pageYOffset.toString());
    let proxy:any = { y: pos};
    TweenMax.to(
      proxy, 
      2, 
      {
        ease: Power4.easeOut,
        y: 0,
        onUpdate: function(){
          window.scrollTo(0, proxy.y);
        } 
      }
    );  
  }

}



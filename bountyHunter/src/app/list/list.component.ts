import { Component, OnInit } from '@angular/core';
import { InfoBonbonService } from '../info-bonbon.service';
import { Observable } from 'rxjs';
import { BonbonInfo } from '../bonbon-info';

declare var TweenMax:any;
declare var Power4:any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public levelList: any[] = [
    { name: 'Fantôme', img: 'assets/fantome.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Momie', img: 'assets/momie.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Zombie', img: 'assets/zombie.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Vampire', img: 'assets/vampire.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Esprit', img: 'assets/esprit.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Sorcier', img: 'assets/sorcier.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
  ];

  public hunterList: any[] = [
    { name: 'Collec', img: 'assets/candy1.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Chocolat', img: 'assets/candy2.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Kipik', img: 'assets/candy3.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Original', img: 'assets/candy4.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Rare', img: 'assets/candy5.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Ultime', img: 'assets/candy6.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
  ];

  public currentBadge: any = {
    'name': '',
    'img': '',
    'description': ''
  };

  public badgeInfo(badge: any): any {
    this.currentBadge.name = badge.name;
    this.currentBadge.img = badge.img;
    this.currentBadge.description = badge.description;
  }

  constructor() { }
  // Gestion du clic pour le bonbon sélectionné ( Participage à l'affichage de la popup)
  public currentSelectedCandy: any = {
    "name": "",
    "img": ""
  }

  public CandyInfo(param_obj: any): any {
    this.currentSelectedCandy.name = param_obj.name;
    this.currentSelectedCandy.img = param_obj.img;
  }

  // Utilisation service


  public planetImg: BonbonInfo = null;

  public img: string = "";
  public images: string[];

  private service: InfoBonbonService;

  constructor(
    param_bonbon_service : InfoBonbonService
  ) { 
    this.planetImg = new BonbonInfo("bonbon", "bonbon");
    this.service = param_bonbon_service;
    this.img = "";
    this.images = [];
  }

  ngOnInit() {

    const obs: Observable<any[]> = this.service.getBonbonInfo(this.planetImg.planet);
    
    obs.subscribe(
      (param_images_urls: any[]) => {
        this.images = param_images_urls;
      }

    );
  }
  public candyNumber:number =0;
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



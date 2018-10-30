import { Component, OnInit } from '@angular/core';
import { InfoBonbonService } from '../info-bonbon.service';
import { Observable } from 'rxjs';
import { BonbonInfo } from '../bonbon-info';

declare var TweenMax: any;
declare var Power4: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  public planetImg: BonbonInfo = null;

  public img: string = "";
  public images: string[];

  private service: InfoBonbonService;

  public candyNumber: number = 0;

  // Gestion du clic pour le bonbon sélectionné ( Participage à l'affichage de la popup)

  constructor(
    param_bonbon_service: InfoBonbonService
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

  candyUp() {
    if (this.candyNumber < 99) {
      this.candyNumber++;
    }
  }
  candyDown() {
    if (this.candyNumber > 0) {
      this.candyNumber--;
    }
  }

  goTop() {
    let pos = parseInt(window.pageYOffset.toString());
    let proxy: any = { y: pos };
    TweenMax.to(
      proxy,
      2,
      {
        ease: Power4.easeOut,
        y: 0,
        onUpdate: function () {
          window.scrollTo(0, proxy.y);
        }
      }
    );
  }

}



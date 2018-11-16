import { Component, OnInit, Input } from '@angular/core';
import { InfoBonbonService } from "../info-bonbon.service";
import { BonbonInfo } from "../bonbon-info";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-candy-info',
  templateUrl: './candy-info.component.html',
  styleUrls: ['./candy-info.component.css']
})
export class CandyInfoComponent implements OnInit {

  public planetImg: BonbonInfo = null;

  public img: string = "";
  public images: any[];

  private service: InfoBonbonService;






  


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
}

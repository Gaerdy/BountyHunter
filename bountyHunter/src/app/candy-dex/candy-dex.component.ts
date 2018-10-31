import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candy-dex',
  templateUrl: './candy-dex.component.html',
  styleUrls: ['./candy-dex.component.css']
})

export class CandyDexComponent implements OnInit {

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

  public candyList: any[] = [];

  public lengthCandyList: number;

  public currentBadge: any = {
    'name': '',
    'img': '',
    'description': ''
  };

  public currentCandy: any = {
    'name': '',
    'img': '',
    'counter': 0
  };

  public currentCandyList: any = {
    'name': '',
    'img': '',
    'id': '',
    'counter': 0,
    'generic': '',
    'brands': '',
    'countries': '',
    'stores': '',
    'quantity': ''
  };

  public status: boolean = false;

  public badgeInfo(badge: any): any {
    this.currentBadge.name = badge.name;
    this.currentBadge.img = badge.img;
    this.currentBadge.description = badge.description;
  }

  // tslint:disable-next-line:max-line-length
  public popUpCandyInfo(candy_name, candy_img, candy_id, candy_counter, candy_generic, candy_brands, candy_countries, candy_stores, candy_quantity): any {
    this.currentCandyList.name = candy_name;
    this.currentCandyList.img = candy_img;
    this.currentCandyList.id = candy_id;
    this.currentCandyList.counter = candy_counter;
    this.currentCandyList.generic = candy_generic;
    this.currentCandyList.brands = candy_brands;
    this.currentCandyList.countries = candy_countries;
    this.currentCandyList.stores = candy_stores;
    this.currentCandyList.quantity = candy_quantity;

    console.log(this.currentCandyList);
  }

  public clickEvent(witchOne: string): void {
    const successDiv = document.getElementById('successTab');
    const candyDiv = document.getElementById('candyTab');
    const background = document.getElementById("candy-dex-background");
    if (witchOne === 'candy' && candyDiv.classList.contains('hidden')) {
      successDiv.classList.add('hidden');
      candyDiv.classList.remove('hidden');
      background.style.background = "#131129";
    } else if (witchOne === 'success' && successDiv.classList.contains('hidden')) {
      successDiv.classList.remove('hidden');
      candyDiv.classList.add('hidden');
      background.style.background = "#188F55";
    }
  }

  public popUpCandy() {
    const candyPop = document.getElementById('candy-popup-container');
    if (candyPop.classList.contains('hidden')) {
      candyPop.classList.remove('hidden');
    } else {
      candyPop.classList.add('hidden');
    }

  }

  goToSearchFromDex() {
    document.getElementById("all-pages").style.marginLeft = "-100%";
  }

  // Constructor & ngOnInit()

  constructor() { }

  ngOnInit() {
    this.lengthCandyList = localStorage.length;
    for (let i = 0; i < this.lengthCandyList; i++) {
      this.candyList.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    console.log(this.candyList);
  }




}



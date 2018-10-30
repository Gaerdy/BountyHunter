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

  public currentBadge: any = {
    'name': '',
    'img': '',
    'description': ''
  };

  public currentSelectedCandy: any = {
    'name': '',
    'img': ''
  };

  public status: boolean = false;

  public badgeInfo(badge: any): any {
    this.currentBadge.name = badge.name;
    this.currentBadge.img = badge.img;
    this.currentBadge.description = badge.description;
  }

  public CandyInfo(param_obj: any): any {
    this.currentSelectedCandy.name = param_obj.name;
    this.currentSelectedCandy.img = param_obj.img;
  }

  public clickEvent(witchOne: string): void {
    const successDiv = document.getElementById('successTab');
    const candyDiv = document.getElementById('candyTab');
    if (witchOne === 'candy' && candyDiv.classList.contains('hidden')) {
      successDiv.classList.add('hidden');
      candyDiv.classList.remove('hidden');
    } else if (witchOne === 'success' && successDiv.classList.contains('hidden')) {
      successDiv.classList.remove('hidden');
      candyDiv.classList.add('hidden');
    }
  }

  constructor() { }

  ngOnInit() {
  }

}

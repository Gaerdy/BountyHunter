import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-candy-dex',
  templateUrl: './candy-dex.component.html',
  styleUrls: ['./candy-dex.component.css']
})

export class CandyDexComponent implements OnInit {

  public levelList: any[] = [
    { name: 'Fantôme', img: 'assets/fantome.png', description: '1 bonbon récupéré ! Bienvenue parmis les mangeurs de bonbons !' },
    { name: 'Momie', img: 'assets/momie.png', description: '5 bonbons récupérés ! C‘est le début de la richesse !' },
    { name: 'Zombie', img: 'assets/zombie.png', description: '10 bonbons récupérés ! Bien joué chef !' },
    { name: 'Vampire', img: 'assets/vampire.png', description: '20 bonbons récupérés ! La promesse d‘un ventre bien rempli !' },
    { name: 'Esprit', img: 'assets/esprit.png', description: '50 bonbons récupérés ! À se stade là il va falloir partager avec les copains !' },
    { name: 'Sorcier', img: 'assets/sorcier.png', description: '100 bonbons récupérés ! Attention à la crise de foie !' }
  ];

  public hunterList: any[] = [
    { name: 'Collec', img: 'assets/candy1.png', description: '5 types de bonbons diffèrents ! Attention aux mélanges !' },
    { name: 'Chocolat', img: 'assets/candy2.png', description: '10 bonbons chocolatés ! bravo Charlie !' },
    { name: 'Kipik', img: 'assets/candy3.png', description: '10 bonbons qui piquent ! On en à les larmes aux yeux !' },
    { name: 'Original', img: 'assets/candy4.png', description: '10 bonbons originaux ! On les avait jamais vu ceux-là !' },
    { name: 'Rare', img: 'assets/candy5.png', description: '5 bonbons rare ! Wow tu as fais le tour de la ville pour les avoirs ou quoi ?!' },
    { name: 'Ultime', img: 'assets/candy6.png', description: 'La totalité des bonbons de la liste trouvés ! Mais à ce stade là tu dois déjà être mort du diabète !' }
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

  public status: boolean = false;

  public badgeInfo(badge: any): any {
    this.currentBadge.name = badge.name;
    this.currentBadge.img = badge.img;
    this.currentBadge.description = badge.description;
  }

  public CandyInfo(candy: any): any {
    this.currentCandy.name = candy.name;
    this.currentCandy.img = candy.img;
    this.currentCandy.counter = candy.counter;
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
  
  goToSearchFromDex() {
    document.getElementById("all-pages").style.marginLeft = "-100%";
  }

  public CurrentBadge: any = {
    "name": "",
    "img": "",
    "description": "",
  }

  constructor() { }

  ngOnInit() {
    this.lengthCandyList = localStorage.length;
    for (let i = 0; i < this.lengthCandyList; i++) {
      this.candyList.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
  };




  showSuccesPopUp(){
    document.getElementById("success-pop-up-container").classList.remove("hidden-page");
  }


  public giveValues(param_name, param_img, param_description): any {
    this.CurrentBadge.name = param_name;
    this.CurrentBadge.img = param_img;
    this.CurrentBadge.description = param_description;
    console.log(this.CurrentBadge.name);
  }


  hideSuccesPopUp(){
    document.getElementById("success-pop-up-container").classList.add("hidden-page");
  }

}


import { Component, OnInit } from '@angular/core';

declare var TweenMax:any;
declare var Power4:any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchWord:string;

  public placeHolder:string ="Mon bonbon ...";

  constructor() { }

  ngOnInit() {
  }

  goToList() {
    const pageList = document.getElementById("app-list");


    if(this.searchWord != undefined && this.searchWord != "") {
      this.placeHolder = "Mon bonbon ...";
      pageList.classList.remove("hidden-page");
      document.getElementById("search-input").style.border="none"
      setTimeout(() => {
      //   let pos = parseInt(window.pageYOffset.toString());
      // let proxy:any = { y: pos};
      // TweenMax.to(
      //   proxy, 
      //   2, 
      //   {
      //     ease: Power4.easeOut,
      //     y: 700,
      //     onUpdate: function(){
      //       window.scrollTo(0, proxy.y);
      //     } 
      //   }
      // ); 
      document.getElementById("all-pages").style.marginTop="-100vh"; 
      },1);
    } else {
      this.placeHolder = "On veut un bonbon !";
      document.getElementById("search-input").style.border="solid red 1px"
    }

    }

    moveToSuccess(){
      document.getElementById("all-pages").style.marginLeft="0";
    }
    moveToMap(){
      document.getElementById("all-pages").style.marginLeft="-200%";
    }

  }


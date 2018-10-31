import { Component, OnInit } from '@angular/core';

declare var TweenMax:any;
declare var Power4:any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goToList() {
    const pageList = document.getElementById("app-list");

    pageList.classList.remove("hidden-page");

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

    }

    moveToSuccess(){
      document.getElementById("all-pages").style.marginLeft="0";
    }
    moveToMap(){
      document.getElementById("all-pages").style.marginLeft="-200%";
    }

  }


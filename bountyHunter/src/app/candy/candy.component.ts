import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candy',
  templateUrl: './candy.component.html',
  styleUrls: ['./candy.component.css']
})
export class CandyComponent implements OnInit {

  public candy:any = {
    "name":"Haribo",
    "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5mqg9cwm99ab_iR96QUpIXjr7BlB_fEHZ8EZOKj20SLzMkp9hyw"
  }

  constructor() { }

  ngOnInit() {
  }

}

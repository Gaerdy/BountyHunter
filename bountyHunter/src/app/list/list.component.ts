import { Component, OnInit } from '@angular/core';

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
      "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmUtYXec86sf9Kfjqor140LELj5edM8EzANq8poCrvLt7LpnjL"
    },
    {
      "name":"Tagada",
      "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmUtYXec86sf9Kfjqor140LELj5edM8EzANq8poCrvLt7LpnjL"
    },
    {
      "name":"Lolilo",
      "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmUtYXec86sf9Kfjqor140LELj5edM8EzANq8poCrvLt7LpnjL"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}



import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-candy',
  templateUrl: './candy.component.html',
  styleUrls: ['./candy.component.css']
})
export class CandyComponent implements OnInit {

  @Input() name:string = "Haribo";
  @Input() img:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmUtYXec86sf9Kfjqor140LELj5edM8EzANq8poCrvLt7LpnjL";


  constructor() { }

  ngOnInit() {
  }

}

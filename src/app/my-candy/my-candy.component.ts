import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-candy',
  templateUrl: './my-candy.component.html',
  styleUrls: ['./my-candy.component.css']
})
export class MyCandyComponent implements OnInit {

  @Input() name: string = 'no-name';
  @Input() img: string = 'assets/lockedBadge.png';
  @Input() counter: number = 0;
  @Input() description: string = 'no-description';

  constructor() { }

  ngOnInit() {
  }

}

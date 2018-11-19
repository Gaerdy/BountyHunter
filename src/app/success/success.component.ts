import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  @Input() name: string = 'no-name';
  @Input() img: string = 'assets/lockedBadge.png';
  @Input() description: string = 'no-description';

  constructor() { }

  ngOnInit() {
  }

}

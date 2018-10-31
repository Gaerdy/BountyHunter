import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-success-pop-up',
  templateUrl: './success-pop-up.component.html',
  styleUrls: ['./success-pop-up.component.css']
})
export class SuccessPopUpComponent implements OnInit {

  @Input() CurrentBadge

  constructor() { }

  ngOnInit() {
  }
  
  
}

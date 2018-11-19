import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bountyHunter';
  @Input() searchWord: string;

  gotToSearchFrommap() {
    document.getElementById("all-pages").style.marginLeft="-100%";
  }

}

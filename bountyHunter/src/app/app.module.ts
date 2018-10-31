import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CandyComponent } from './candy/candy.component';
import { CandyInfoComponent } from './candy-info/candy-info.component';
import { InfoBonbonService } from './info-bonbon.service';
import { SearchComponent } from './search/search.component';
import { ResponseComponent } from './response/response.component';
<<<<<<< HEAD
import { SearchPipe } from './search.pipe';
=======
import { BonbonNamePipe } from './bonbon-name.pipe';
>>>>>>> c345abf4ab12b98833faafbf50332f7edb842b90

@NgModule({
  declarations: [
    AppComponent,
    CandyComponent,
    CandyInfoComponent,
    SearchComponent,
    ResponseComponent,
    ListComponent,
<<<<<<< HEAD
    SearchPipe,
=======
    BonbonNamePipe,
>>>>>>> c345abf4ab12b98833faafbf50332f7edb842b90
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [InfoBonbonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

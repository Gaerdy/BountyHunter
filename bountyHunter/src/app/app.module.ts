import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CandyComponent } from './candy/candy.component';
import { CandyInfoComponent } from './candy-info/candy-info.component';
import { InfoBonbonService } from './info-bonbon.service';
import { SearchComponent } from './search/search.component';
import { ResponseComponent } from './response/response.component';

@NgModule({
  declarations: [
    AppComponent,
    CandyComponent,
    CandyInfoComponent,
    SearchComponent,
    ResponseComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [InfoBonbonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

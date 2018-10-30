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
import { SuccessComponent } from './success/success.component';
import { CandyDexComponent } from './candy-dex/candy-dex.component';
import { MyCandyComponent } from './my-candy/my-candy.component';

@NgModule({
  declarations: [
    AppComponent,
    CandyComponent,
    CandyInfoComponent,
    SearchComponent,
    ResponseComponent,
    ListComponent,
    SuccessComponent,
    CandyDexComponent,
    MyCandyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [InfoBonbonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

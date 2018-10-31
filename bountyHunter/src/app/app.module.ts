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
import { SearchPipe } from './search.pipe';
import { BonbonNamePipe } from './bonbon-name.pipe';
import { SuccessComponent } from './success/success.component';
import { CandyDexComponent } from './candy-dex/candy-dex.component';
import { MyCandyComponent } from './my-candy/my-candy.component';
import { SuccessPopUpComponent } from './success-pop-up/success-pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    CandyComponent,
    CandyInfoComponent,
    SearchComponent,
    ResponseComponent,
    ListComponent,
    SearchPipe,
    BonbonNamePipe,
    SuccessComponent,
    CandyDexComponent,
    MyCandyComponent,
    SuccessPopUpComponent
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

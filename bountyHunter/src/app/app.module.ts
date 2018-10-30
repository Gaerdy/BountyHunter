import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { CandyInfoComponent } from './candy-info/candy-info.component';
import { InfoBonbonService } from './info-bonbon.service';

@NgModule({
  declarations: [
    AppComponent,
    CandyInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [InfoBonbonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { ResponseComponent } from './response/response.component';
import { CandyComponent } from './candy/candy.component';
import { MapComponent } from "./map/map.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListComponent,
    ResponseComponent,
    CandyComponent,
    MapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

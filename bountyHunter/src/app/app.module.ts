import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CandyComponent } from './candy/candy.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { ResponseComponent } from './response/response.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CandyComponent
    SearchComponent,
    ListComponent,
    ResponseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

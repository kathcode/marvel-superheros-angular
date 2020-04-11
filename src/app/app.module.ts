import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ComicsModule } from './comics/comics.module';

// Data
import { MarvelService } from './data/services/marvel.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ComicsModule,
    AgGridModule.withComponents([])
  ],
  providers: [MarvelService],
  bootstrap: [AppComponent]
})
export class AppModule { }

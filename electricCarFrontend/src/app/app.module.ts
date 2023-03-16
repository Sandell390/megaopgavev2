import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarviewListComponent } from './components/carview-list/carview-list.component';
import { CarviewDetailComponent } from './components/carview-detail/carview-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CarviewListComponent,
    CarviewDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

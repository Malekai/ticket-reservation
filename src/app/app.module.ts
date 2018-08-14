import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FlightComponent } from './flight/flight.component';


@NgModule({
  declarations: [
    AppComponent,
    FlightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FlightComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FlightComponent } from './flight/flight.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { IdPipe } from './id.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    FlightDetailsComponent,
    IdPipe,
    HttpModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FlightComponent]
})
export class AppModule { }

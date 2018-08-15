import { Component, OnInit } from '@angular/core';
import { mockFlights } from './mock-flights'
import Flight from './flight';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent {

  flights : Flight[] = mockFlights;
  flightDetails : Flight = null;
  selectedRow: number;

  showFlight(flight : Flight, index: number) {
    this.flightDetails =  flight;
    this.selectedRow = index;
  }

}

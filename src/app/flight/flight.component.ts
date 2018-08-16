import { Component, OnInit } from '@angular/core';
import { mockFlights } from './mock-flights'
import Flight from './flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent {

  flights : Flight[] = mockFlights;
  flightDetails : Flight = null;
  selectedRow: number;

  constructor(private flightService : FlightService) {}

  showFlight(flight : Flight, index: number) {
    this.flightDetails =  flight;
    this.selectedRow = index;
  }

  ngOnInit() {
    //this.flightService.getAllFlights().then(response=>this.flightData=response);
  }
}

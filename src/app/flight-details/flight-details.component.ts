import { Component, Input } from '@angular/core';
import Flight from '../flight/flight';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent {

  flightDetails: Flight = null;

  @Input() set details(flight: Flight) {
    this.flightDetails = flight;
  }
}

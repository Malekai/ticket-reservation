import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import Flight from './flight/flight';

@Injectable()
export class FlightService {

  url: string = '';

  constructor(private http: Http) { }

  getAllFlights(): Promise<Flight[]> {  
    return this.http.get(this.url)    
    .toPromise()    
    .then(response=>response.json() as Flight[])    
    .catch(this.errorHandler);
  }
    
  private errorHandler(error:any):Promise<any> {
    console.error("Error occured",error);    
    return Promise.reject(error.message || error);
  }

}

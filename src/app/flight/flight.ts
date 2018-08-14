export default class Flight {
    flightId : string;
    scheduleId: string;
    source : string;
    destination: string;
    departureDate: Date;
    arrivalDate: Date;
    baseFare: number;
    seatsAvailable: number;
    message: string;

    constructor(flightId, scheduleId, source, destination, departureDate, arrivalDate, baseFare, seatsAvailable, message) {
        this.flightId = flightId;
        this.scheduleId = scheduleId;
        this.source = source;
        this.destination = destination;
        this.departureDate = departureDate;
        this.arrivalDate = arrivalDate;
        this.baseFare = baseFare;
        this.seatsAvailable = seatsAvailable;
        this.message = message;
    }
}

import Flight from './flight';

export const mockFlights : Flight[] = [
    new Flight('FAI002', '2', 'Bengaluru', 'Chennai', new Date('2017-12-12 21:55:39'), new Date('2017-12-13 00:42:23'), 2000, 200, 'Fuck you'), 
    new Flight('FAI001', '1', 'Bengaluru', 'Delhi', new Date('2017-12-12 21:55:47'), new Date('2017-12-13 00:42:28'), 2000, 200, 'Nah'), 
    new Flight('FAI003', '3', 'Pune', 'Chennai', new Date('2017-12-12 21:55:47'), new Date('2017-12-13 00:42:28'), 2000, 200, 'Yaaas Queen'),
    new Flight('FAI004', '4', 'Hyperbad', 'Mysore', new Date('2017-12-12 21:55:47'), new Date('2017-12-13 00:42:28'), 2000, 200, 'Haaan'),
    new Flight('FAI005', '5', 'Mumbai', 'Chandingr', new Date('2017-12-12 21:55:47'), new Date('2017-12-13 00:42:28'), 2000, 200, 'Blue'),
];

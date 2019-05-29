const writeToFile = require('./src/util').writeToFile;
const genUsers = require('./src/users');
const genBookings = require('./src/bookings');

// Globals
global.numUsers = 5;
global.numDays = 100;
global.numRoomsInHotel = 200;
global.faker = require('faker');
global.faker.locale = 'en_US';

// Create and write data to files
console.log('Generating users...');
writeToFile('./output/users.js', genUsers());
console.log('Generating bookings...');
writeToFile('./output/bookings.js', genBookings());

const writeToFile = require('./src/util').writeToFile;
const genUsers = require('./src/users');
const genBookings = require('./src/bookings');
const genRoomServices = require('./src/roomServices');
const genRooms = require('./src/rooms');

// Globals
global.numUsers = 10;
global.numDays = 10;
global.numRoomsInHotel = 150;
global.faker = require('faker');
global.faker.locale = 'en_US';

// Create and write data to files
console.log('Generating users...');
writeToFile('./output/users.js', genUsers());
console.log('Generating bookings...');
writeToFile('./output/bookings.js', genBookings());
// console.log('Generating room services...');
// writeToFile('./output/roomServices.js', genRoomServices());
// console.log('Generating rooms...');
// writeToFile('./output/rooms.js', genRooms());

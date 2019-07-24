const writeToFile = require('./src/util').writeToFile;
const genUsers = require('./src/users');
const genBookings = require('./src/bookings');
const genRoomServices = require('./src/roomServices');
const genRooms = require('./src/rooms');

// Globals
global.numUsers = 100;
global.numDays = global.numUsers;
global.numRoomsInHotel = global.numUsers / 2;
global.numBookings = global.numUsers * 20;
global.faker = require('faker');
global.faker.locale = 'en_US';

// Create and write data to files
console.log('Generating users...');
writeToFile('./output/users.js', genUsers());
console.log('Generating rooms...');
writeToFile('./output/rooms.js', genRooms());
console.log('Generating bookings...');
writeToFile('./output/bookings.js', genBookings());
console.log('Generating room services...');
writeToFile('./output/roomServices.js', genRoomServices());

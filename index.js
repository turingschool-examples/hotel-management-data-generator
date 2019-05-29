const writeToFile = require('./src/util').writeToFile;
const genUsers = require('./src/users');

// Globals
global.numUsers = 5;
global.numDays = 5;
global.faker = require('faker');
global.faker.locale = 'en_US';

// Create and write data to files
console.log('Generating users...');
writeToFile('./output/users.js', genUsers());

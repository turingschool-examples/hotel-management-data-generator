const fs = require('fs');
const generateValueWithinRange = require('./util').generateValueWithinRange;

function genDate(userID) {
  // This will sporadically make the script fail because a user does not NEED a booking at this point
  let allBookings = JSON.parse(fs.readFileSync('./output/bookings.js', 'utf8'));
  let bookingsForUser = allBookings.filter(booking => booking.userID == userID);
  let randomBooking = bookingsForUser[Math.floor(Math.random() * bookingsForUser.length)];
  return randomBooking.date;
}

function genFood() {
  return `${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()} Sandwich`;
}

function genRoomServices() {
  return (new Array(global.numUsers)).fill().map(function(roomService) {
    let userID = generateValueWithinRange(1, global.numUsers, 0);
    
    return {
      userID: userID,
      date: genDate(userID),
      food: genFood(),
      totalCost: generateValueWithinRange(5, 25, 2)
    }
  });
}

module.exports = genRoomServices;
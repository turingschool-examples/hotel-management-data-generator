const moment = require('moment');
const uniqid = require('uniqid');
const generateValueWithinRange = require('./util').generateValueWithinRange;

function genDate() {
  let daysInFuture = generateValueWithinRange(0, global.numDays, 0);
  return moment().add(daysInFuture, 'days').format('YYYY/MM/DD');
}

function genUserIDList() {
  return (new Array(global.numUsers)).fill().map((id, idx) => idx + 1);
}

function pickRandomUser(possibleUsers) {
  if (!possibleUsers.length) {
    possibleUsers = genUserIDList();
  } 
  let userID = possibleUsers[Math.floor(Math.random() * possibleUsers.length)];
  possibleUsers.splice(possibleUsers.indexOf(userID), 1);
  return userID;
}

function checkIfBookingExists(date, roomNumber, bookings) {
  return bookings.find(booking => {
    return booking.date === date && booking.roomNumber === roomNumber;
  });
}

function generateValidBooking(userForBooking, bookings) {
  let validFlag = false;

  while (!validFlag) {
    let bookingID = uniqid();
    let randomDate = genDate();
    let randomRoomNumber = generateValueWithinRange(1, global.numRoomsInHotel, 0);
    
    if (!checkIfBookingExists(randomDate, randomRoomNumber, bookings)) {
      validFlag = true;
      return {id: bookingID, userID: userForBooking, date: randomDate, roomNumber: randomRoomNumber, roomServiceCharges: []};
    }  
  }
}

function genBookings() {
  let possibleUsers = genUserIDList();

  // Would have used a .map() here, but I needed to check the contents
  // of the bookings array as it was being made to see that no one was
  // booking the same room for the same day
  let bookings = [];

  for (let i=0; i <= (global.numBookings); i++) {
    let userForBooking = pickRandomUser(possibleUsers);
    bookings.push(generateValidBooking(userForBooking, bookings));
  }

  return bookings;
}

module.exports = genBookings;
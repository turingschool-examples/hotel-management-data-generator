const moment = require('moment');
const generateValueWithinRange = require('./util').generateValueWithinRange;

function genDate() {
  let daysInFuture = generateValueWithinRange(0, global.numDays, 0);
  return moment().add(daysInFuture, 'days').format('DD/MM/YYYY');
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

function checkIfBookingTaken(date, roomNumber, bookingsArray) {
  return !bookingsArray.find(booking => {
    booking.date === date && booking.roomNumber === roomNumber;
  });
}

function generateValidBooking(bookingsArray) {
  let userForBooking = pickRandomUser(possibleUsers);
  let validFlag = false;

  while (!validFlag) {
    let date = genDate();
    let roomNumber = generateValueWithinRange(1, global.numRoomsInHotel, 0);
    
    if (checkIfBookingTaken(date, roomNumber, bookingsArray)) {
      validFlag = true;
      let userID = generateValueWithinRange(userForBooking, userForBooking, 0);
      return {userID, date, roomNumber};
    }  
  }
}

function genBookings() {
  let possibleUsers = genUserIDList();

  return (new Array(global.numUsers * 2)).fill().map(function(booking, idx, bookingsArray) {
    return generateValidBooking(bookingsArray);
  });
}

module.exports = genBookings;
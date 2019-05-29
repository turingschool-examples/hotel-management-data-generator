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

function genBookings() {
  let possibleUsers = genUserIDList();

  return (new Array(global.numUsers * 2)).fill().map(function(booking) {
    let userForBooking = pickRandomUser(possibleUsers);

    return {
      userID: generateValueWithinRange(userForBooking, userForBooking, 0),
      date: genDate(),
      roomNumber: generateValueWithinRange(1, global.numRoomsInHotel, 0)
    }
  });
}

module.exports = genBookings;
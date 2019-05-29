const moment = require('moment');
const generateValueWithinRange = require('./util').generateValueWithinRange;

function genDate() {
  let daysInFuture = generateValueWithinRange(0, global.numDays, 0);
  return moment().add(daysInFuture, 'days').format('DD/MM/YYYY');
}

function genBookings() {
  return (new Array(global.numUsers * 2)).fill().map(function(user, idx) {
    return {
      userID: generateValueWithinRange(1, global.numUsers, 0),
      date: genDate(),
      roomNumber: generateValueWithinRange(1, global.numRoomsInHotel, 0)
    }
  });
}

module.exports = genBookings;
const generateValueWithinRange = require('./util').generateValueWithinRange;

function genRoomType() {
  // "Single room" is duplicated to increase frequency it is chosen
  let roomTypes = ['junior suite', 'suite', 'residential suite', 'single room', 'single room'];
  return roomTypes[Math.floor(Math.random() * roomTypes.length)];
}

function genBedSize() {
  // "queen" is duplicated to increase frequency it is chosen
  let bedTypes = ['twin', 'full', 'queen', 'queen', 'king'];
  return bedTypes[Math.floor(Math.random() * bedTypes.length)];
}

function genBidet() {
  // "false" is duplicated to increase frequency it is chosen
  let bidetPosibilities = [true, false, false];
  return bidetPosibilities[Math.floor(Math.random() * bidetPosibilities.length)];
}

function genRooms() {
  return (new Array(global.numRoomsInHotel)).fill().map(function(room, idx) {
    return {
      number: idx + 1,
      roomType: genRoomType(),
      bidet: genBidet(),
      bedSize: genBedSize(),
      numBeds: generateValueWithinRange(1, 2, 0),
      costPerNight: generateValueWithinRange(150, 500, 2)
    }
  });
}

module.exports = genRooms;
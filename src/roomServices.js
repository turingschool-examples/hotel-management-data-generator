const fs = require('fs');
const generateValueWithinRange = require('./util').generateValueWithinRange;

function genDate(userID) {
  // This might sporadically make the script fail because a user is not guaranteed to have a booking
  let allBookings = JSON.parse(fs.readFileSync('./output/bookings.js', 'utf8'));
  let bookingsForUser = allBookings.filter(booking => booking.userID == userID);
  let randomBooking = bookingsForUser[Math.floor(Math.random() * bookingsForUser.length)];
  return randomBooking.date;
}

function genRoomServices() {
  return (new Array(global.numUsers)).fill().map(function(roomService) {
    let userID = generateValueWithinRange(1, global.numUsers, 0);
    let randomFoodFromMenu = menu[Math.floor(Math.random() * menu.length)];
    
    return {
      userID: userID,
      date: genDate(userID),
      food: randomFoodFromMenu.item,
      totalCost: parseFloat(randomFoodFromMenu.price.toFixed(2))
    };
  });
}

const menu = [
  {
    item: "BLT Sandwich",
    price: 15.50
  },
  {
    item: "Hummus and vegetable platter",
    price: 8.15
  },
  {
    item: "Chicken Tenders",
    price: 12.40
  },
  {
    item: "Linguine with Clam Sauce",
    price: 22.25
  },
  {
    item: "House Salad",
    price: 12.35
  },
  {
    item: "Egg and Sausage Sandwich",
    price: 9.25
  },
  {
    item: "Pancakes",
    price: 9.75
  },
  {
    item: "Breakfast Empanada with Chorizo",
    price: 7.35
  },
  {
    item: "Pad Thai with Choice of Protein",
    price: 15.65
  },
  {
    item: "Ribeye Steak with Mashed Potatoes",
    price: 32.15
  },
  {
    item: "Seasonal Vegetable Side",
    price: 8.75
  },
  {
    item: "Sesame Soba Noodles with Pickled Vegetables and Tofu",
    price: 21.25
  },
  {
    item: "Sparkling Water",
    price: 3.50
  },
  {
    item: "Fresh-Squeezed Orange Juice",
    price: 5.25
  },
  {
    item: "Lemonade",
    price: 4.50
  },
  {
    item: "White Wine",
    price: 9.75
  },
  {
    item: "Red Wine",
    price: 9.75
  },
  {
    item: "Stout Beer",
    price: 6.50
  },
  {
    item: "Lager Beer",
    price: 6.25
  },
  {
    item: "Iced tea",
    price: 3.75
  }
];

module.exports = genRoomServices;
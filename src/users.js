function genName() {
  return `${faker.name.firstName()} ${faker.name.lastName()}`;
}

function genUsers() {
  return (new Array(global.numUsers)).fill().map(function(user, idx) {
    return {
      id: idx + 1,
      name: genName()
    }
  });
}

module.exports = genUsers;
const fs = require('fs');

module.exports = {
  writeToFile: function(filename, data) {
    dataToJSON = JSON.stringify(data, null, 2);

    fs.writeFileSync(filename, dataToJSON);
  },

  generateValueWithinRange: function(min, max, precision) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(precision));
  }
}

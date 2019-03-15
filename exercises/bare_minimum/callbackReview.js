/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function(filePath, callback) {
  // TODO
  fs.readFile(`${filePath}`, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      var string = [];
      for (var i = 0; i < result.length; i++) {
        if (result.toString()[i] !== '\n') {
          string.push(result.toString()[i]);
        } else {
          break;
        }
      }
      // console.log(string.join(''));
      callback(null, string.join(''));
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function(url, callback) {
  // TODO
  request(url, 'GET', (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      // console.log(result);
      callback(null, result.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile,
};

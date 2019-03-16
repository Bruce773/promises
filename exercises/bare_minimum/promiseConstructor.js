/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  return new Promise((resolve, reject) => {
    fs.readFile(`${filePath}`, (err, result) => {
      if (err) {
        reject(err);
      } else {
        var string = [];
        for (var i = 0; i < result.length; i++) {
          if (result.toString()[i] !== '\n') {
            string.push(result.toString()[i]);
          } else {
            break;
          }
        }
        resolve(string.join(''));
        // callback(null, string.join(''));
      }
    });
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  return new Promise((resolve, reject) => {
    request(url, 'GET', (err, result) => {
      if (err) {
        reject(err);
      } else {
        // console.log(result);
        resolve(result.statusCode);
      }
    });
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync,
};

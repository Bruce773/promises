/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var promisificationFunctions = require('../bare_minimum/promisification');
var promiseConstructorFunctions = require('../bare_minimum/promiseConstructor');

let writeToFile = Promise.promisify(fs.writeFile);

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return promiseConstructorFunctions
    .pluckFirstLineFromFileAsync(readFilePath)
    .then((result) => {
      return promisificationFunctions.getGitHubProfileAsync(result);
    })
    .then((result) => {
      return writeToFile(writeFilePath, JSON.stringify(result));
    });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile,
};

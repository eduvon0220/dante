var uniqueRandomArray = require('unique-random-array');
var danteQuotes = require('./dante-quotes.json');

module.exports = {
  all: danteQuotes,
  random: uniqueRandomArray(danteQuotes)
};
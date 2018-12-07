const unique = require('unique-random-array')

const quotes = require('./quotes.json')

exports.all = quotes
exports.random = unique(quotes)

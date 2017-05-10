let home = require('./home.json')

let classify = require('./classify.json')

let product = require('./product.json')

module.exports = function () {
  return {
    'home': home, 
    'classify':classify,
    'product':product
  }
}

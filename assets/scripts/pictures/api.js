'use strict'
const config = require('../config')
const getPictures = function () {
  return $.ajax({
    url: config.apiUrl + '/pictures',
    method: 'GET'
  })
}

module.exports = {
  getPictures
}

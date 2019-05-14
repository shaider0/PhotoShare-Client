'use strict'
const config = require('../config')
const store = require('../store')

const getPictures = function () {
  return $.ajax({
    url: config.apiUrl + '/pictures',
    method: 'GET'
  })
}
const onCreatePicture = function (data) {
  return $.ajax({
    url: config.apiUrl + '/pictures',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  getPictures,
  onCreatePicture
}

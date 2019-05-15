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
const onChangePicture = function (data) {
  return $.ajax({
    url: config.apiUrl + `/pictures/${data.picture.id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const onDeletePicture = function (id) {
  return $.ajax({
    url: config.apiUrl + `/pictures/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  getPictures,
  onCreatePicture,
  onChangePicture,
  onDeletePicture
}

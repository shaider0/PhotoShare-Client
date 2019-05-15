'use strict'
const config = require('../config')
const store = require('../store')

const getPictures = function () {
  return $.ajax({
    url: config.apiUrl + '/pictures',
    method: 'GET'
  })
}

const getMyPictures = function (id) {
  return $.ajax({
    url: config.apiUrl + `/pictures/${id}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
// const onCreatePicture = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/pictures',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }
// const onCreatePicture = function (data) {
const onCreatePicture = function (data) {
     return $.ajax({
       url: config.apiUrl + '/pictures',
       data: data,
       contentType: false,
       processData: false,
       headers: {
         Authorization: 'Token token=' + store.user.token
       },
       type: 'POST'
     })
       .then(getPictures)
       .catch(console.log)
}


const onChangePicture = function (data, pictureId) {
  return $.ajax({
    url: config.apiUrl + `/pictures/${pictureId}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data : {
      'picture' : {
        'title' : data.title,
        'description' : data.description
      }
    }
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
  getMyPictures,
  onCreatePicture,
  onChangePicture,
  onDeletePicture
}

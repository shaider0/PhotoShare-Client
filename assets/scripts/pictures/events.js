'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const config = require('../config')
const store = require('../store')

const getPictures = function () {
  api.getPictures()
    .then(ui.getPicturesSuccess)
    .catch(ui.getPicturesFailure)
}

const onCreatePicture = (event) => {
  event.preventDefault()
  // const data = getFormFields(event.target)
  const formData = new FormData(event.target)
  // api.onCreatePicture(data)
  $.ajax({
      url: config.apiUrl + '/pictures',
      data: formData,
      contentType: false,
      processData: false,
      type: 'POST',
      headers: {
        Authorization: 'Token token=' + store.user.token
      }
    })
    .then(ui.createPictureSuccess)
    .catch(ui.createPictureFailure)
}

const onChangePicture = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const pictureId = $(event.target).data('id')
  console.log('event.target is ', event.target)
  api.onChangePicture(data, pictureId)
    .then(console.log)
    .then(ui.onChangePictureSuccess)
    // .then(getPictures)
    .then(() => getPictures())
    .catch(ui.onChangePictureFailure)
}
const onDeletePicture = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.onDeletePicture(id)
    .then(ui.onDeletePictureSuccess)
    .then(() => getPictures())
    .catch(ui.onDeletePictureFailure)
}

const addHandlers = function () {
  $('#create').on('submit', onCreatePicture)
  // $('.update-picture').on('submit', onChangePicture)
  $('.delete-picture').on('click', onDeletePicture)
  // $('.btn-update-pic').on('click', onChangePicture)
  $('.content').on('submit', '.update-picture', onChangePicture)
}

module.exports = {
  addHandlers
}

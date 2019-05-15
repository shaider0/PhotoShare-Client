'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const getPictures = function () {
  api.getPictures()
    .then(ui.getPicturesSuccess)
    .catch(ui.getPicturesFailure)
}

const onCreatePicture = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.onCreatePicture(data)
    .then(ui.createPictureSuccess)
    .catch(ui.createPictureFailure)
}
const onChangePicture = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.onChangePicture(data)
    .then(ui.onChangePictureSuccess)
    .then(() => getPictures(event))
    .catch(ui.onChangePictureFailure)
}
const onDeletePicture = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.onDeletePicture(id)
    .then(ui.onDeletePictureSuccess)
    .then(() => getPictures(event))
    .catch(ui.onDeletePictureFailure)
}

const addHandlers = function () {
  $('#create').on('submit', onCreatePicture)
  $('.update-picture').on('submit', onChangePicture)
  $('.delete-picture').on('submit', onDeletePicture)
}

module.exports = {
  addHandlers
}

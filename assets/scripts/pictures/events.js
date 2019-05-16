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

const getMyPics = function () {
  console.log('getMypics Called')
  // api.getMyPictures(id)
  api.getPictures()
    .then(ui.getMyPicturesSuccess)
    .catch(ui.getPicturesFailure)
}

const onCreatePicture = (event) => {
  event.preventDefault()
  const metaData = getFormFields(event.target)
  const formData = new FormData(event.target)
  formData.title = metaData.title
  formData.description = metaData.description
  console.log('formdata', formData)
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
    .then(ui.onCreatePictureSuccess)
    .then(getPictures)
    .catch(ui.createPictureFailure)
}

const onChangePicture = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log('formdata is', formData)
  formData.id = $(event.target).data('id')
  console.log('formdata.id is: ', formData.id)
  api.onChangePicture(formData)
    .then(ui.onChangePictureSuccess)
    .then(getPictures)
    .catch(ui.onChangePictureFailure)
}

const onDeletePicture = function (event) {
  event.preventDefault()
  const pictureId = $(event.target).data('id')
  api.onDeletePicture(pictureId)
    .then(ui.onDeletePictureSuccess)
    .then(() => getPictures(event))
    .catch(ui.onDeletePictureFailure)
}

const addHandlers = function () {
  $('#create').on('submit', onCreatePicture)
  // $('.delete-picture').on('click', onDeletePicture)
  $('.content').on('submit', '.update-picture', onChangePicture)
  $('#btnGetMyPics').on('click', getMyPics)
  $('.content').on('click', '.delete-picture', onDeletePicture)
}

module.exports = {
  addHandlers
}

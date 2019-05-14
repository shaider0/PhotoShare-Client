'use strict'
const getPicturesTemplate = require('../templates/pictures-listing.handlebars')

const getPicturesSuccess = function (data) {
  const getPicturesHtml = getPicturesTemplate({ pictures: data.pictures })
  $('.content').html(getPicturesHtml)
}

const onCreatePictureFailure = () => {
  console.log('error on Create picture')
}

const getPicturesFailure = function () {
  console.log('error on getPictures')
}

const onCreatePictureSuccess = (data) => {
  const getPicturesHtml = getPicturesTemplate({ pictures: data.pictures })
  $('.content').html(getPicturesHtml)
}

const onChangePictureSuccess = () => {
  console.log('Change Succeed')
}

const onChangePictureFailure = () => {
  console.log('Change Failed')
}

const onDeletePictureSuccess = (data) => {
  console.log('Delete Succeed')
}

const onDeletePictureFailure = () => {
  console.log('Delete Failed')
}

module.exports = {
  getPicturesSuccess,
  getPicturesFailure,
  onCreatePictureSuccess,
  onCreatePictureFailure,
  onChangePictureSuccess,
  onChangePictureFailure,
  onDeletePictureSuccess,
  onDeletePictureFailure
}

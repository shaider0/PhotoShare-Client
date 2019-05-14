'use strict'
const getPicturesTemplate = require('../templates/pictures-listing.handlebars')

const getPicturesSuccess = function (data) {
  const getPicturesHtml = getPicturesTemplate({ pictures: data.pictures })
  $('.content').html(getPicturesHtml)
}

const getPicturesFailure = function () {
  console.log('error on getPictures')
}

const onCreatePictureSuccess = (data) => {
  const getPicturesHtml = getPicturesTemplate({ pictures: data.pictures })
  $('.content').html(getPicturesHtml)
}

const onCreatePictureFailure = () => {
  console.log('error on Create picture')
}

module.exports = {
  getPicturesSuccess,
  getPicturesFailure,
  onCreatePictureSuccess,
  onCreatePictureFailure
}

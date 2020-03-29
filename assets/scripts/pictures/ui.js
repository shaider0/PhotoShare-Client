'use strict'

// const config = require('../config')
const store = require('../store')
const getPicturesTemplate = require('../templates/pictures-listing.handlebars')
const getPicturesTemplateNoButtons = require('../templates/pictures-listing-noButtons.handlebars')
const timingDelay = 1500

const getPicturesSuccess = function (data) {
  const getPicturesHtml = getPicturesTemplateNoButtons({ pictures: data.pictures })
  $('.content').html(getPicturesHtml)
}

const getMyPicturesSuccess = function (data) {
  const myPicArray = []
  data.pictures.forEach(function (element) {
    $('.content').empty()
    if (element.owner._id === store.user._id) {
      myPicArray.push(element)
    }
  })
  // console.log('myPicArray is ', myPicArray)
  const getPicturesHtml = getPicturesTemplate({ pictures: myPicArray })
  $('.content').html(getPicturesHtml)
  $('.message').empty()
}

const onCreatePictureFailure = () => {
  $('.message').text('Something went wrong, please try again.')
  // console.log('error on Create picture')
}

const getPicturesFailure = function () {
  // console.log('error on getPictures')
  const btnID = '#' + 'btnCreatePicture'
  const originalColor = $(btnID).css('background-color')
  const originalValue = $(btnID).text()
  $(btnID).text('Something Went Wrong!').css('background-color', 'Red').animate({
    opacity: 0.25
  }, timingDelay, function () {
    $(btnID).animate({opacity: 1}).css('background-color', originalColor).text(originalValue)
  })
}

const onCreatePictureSuccess = (data) => {
  $('form').trigger('reset')
  $('#createModal').modal('toggle')
  $('.message').text('Picture added to your collection.')
  // console.log('create Pic Success')
}

const onChangePictureSuccess = () => {
  $('form').trigger('reset')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('.message').text('Password updated.')
  // console.log('Change Succeed')
}

const onChangePictureFailure = () => {
  $('.message').text('Something went wrong, please try again.')
  // console.log('Change Failed')
}

const onDeletePictureSuccess = (data) => {
  // console.log('Delete Succeed')
}

const onDeletePictureFailure = () => {
  $('.message').text('Something went wrong, please try again.')
  // console.log('Delete Failed')
}

module.exports = {
  getPicturesSuccess,
  getMyPicturesSuccess,
  getPicturesFailure,
  onCreatePictureSuccess,
  onCreatePictureFailure,
  onChangePictureSuccess,
  onChangePictureFailure,
  onDeletePictureSuccess,
  onDeletePictureFailure
}

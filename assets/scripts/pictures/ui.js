'use strict'

const config = require('../config')
const store = require('../store')
const getPicturesTemplate = require('../templates/pictures-listing.handlebars')

const getPicturesSuccess = function (data) {
  console.log('shown picture to the handlebar is ', data.pictures)
  const getPicturesHtml = getPicturesTemplate({ pictures: data.pictures })
  $('.content').html(getPicturesHtml)
}

const getMyPicturesSuccess = function (data) {
  // console.log('ui.getMyPicturesSuccess data is ', data.pictures[8].owner._id)
  let myPicArray = []
  data.pictures.forEach(function (element) {
    console.log('Element id is ', element.owner._id )
    $('.content').empty()
    if ( element.owner._id === store.user._id ) {
      console.log('yayykss! Store.user.id and owner.id matches!!')
      console.log(element)
      myPicArray.push(element)
    }
  })
  console.log('myPicArray is ', myPicArray)
  const getPicturesHtml = getPicturesTemplate({ pictures: myPicArray })
  $('.content').html(getPicturesHtml)
}

// const onGetPictureById = id => {
//
// }

const onCreatePictureFailure = () => {
  console.log('error on Create picture')
}

const getPicturesFailure = function () {
  console.log('error on getPictures')
}

const onCreatePictureSuccess = (data) => {
    $('form').trigger('reset')
  console.log('create Pic Success')

  $(addgit '#createModal').modal('toggle')
  const getPicturesHtml = getPicturesTemplate({ pictures: data.pictures })
  $('.content').html(getPicturesHtml)


}

const onChangePictureSuccess = () => {
    $('form').trigger('reset')
  $('.content', '#change-picture-modal').modal('toggle')
  $('.modal-backdrop').remove()
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
  getMyPicturesSuccess,
  getPicturesFailure,
  onCreatePictureSuccess,
  onCreatePictureFailure,
  onChangePictureSuccess,
  onChangePictureFailure,
  onDeletePictureSuccess,
  onDeletePictureFailure
}

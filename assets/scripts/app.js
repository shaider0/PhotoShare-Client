'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const api = require('./pictures/api')
const ui = require('./pictures/ui')
const pictureEvents = require('./pictures/events')
const authEvents = require('./auth/events')

const getPictures = function () {
  api.getPictures()
    .then(ui.getPicturesSuccess)
    .catch(ui.getPicturesFailure)
}

$('#signInModal').on('hidden.bs.modal', function () {
  $('form').trigger('reset')
})
$('#signUpModal').on('hidden.bs.modal', function () {
  $('form').trigger('reset')

  $('#changePasswordModal').on('hidden.bs.modal', function () {
    $('form').trigger('reset')
  })

  $('#createModal').on('hidden.bs.modal', function () {
    $('form').trigger('reset')
  })
})

$(() => {
  $('#btnGetAllPics').on('click', getPictures)
  getPictures()
  pictureEvents.addHandlers()
  authEvents.addHandlers()
})

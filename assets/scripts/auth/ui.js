'use strict'

const store = require('../store')
const timingDelay = 1500

const signUpSuccess = function (data) {
  $('form').trigger('reset')
  $('#signUpModal').modal('toggle')
  $('.message').text('Sign up success, please sign in.')
}

const signUpFailure = function (data) {
  $('form').trigger('reset')
  const btnID = '#' + 'btnSignUp'
  const originalColor = $(btnID).css('background-color')
  const originalValue = $(btnID).text()
  $(btnID).text('Something Went Wrong!').css('background-color', 'Red').animate({
    opacity: 0.25
  }, timingDelay, function () {
    $(btnID).animate({opacity: 1}).css('background-color', originalColor).text(originalValue)
  })
}

const signInSuccess = function (data) {
  $('form').trigger('reset')
  $('.sign-in').hide()
  $('.sign-up').hide()
  $('.hidden').show()
  $('#signInModal').modal('toggle')
  $('.message').text('Sign in success.')
  // console.log('data is ', data)
  store.user = data.user
}

const signInFailure = function (data) {
  $('form').trigger('reset')
  const btnID = '#' + 'btnSignIn'
  const originalColor = $(btnID).css('background-color')
  const originalValue = $(btnID).text()
  $(btnID).text('Something Went Wrong!').css('background-color', 'Red').animate({
    opacity: 0.25
  }, timingDelay, function () {
    $(btnID).animate({opacity: 1}).css('background-color', originalColor).text(originalValue)
  })
}

const changePwSuccess = function () {
  $('form').trigger('reset')
  $('#changePasswordModal').modal('toggle')
  $('.message').text('Password updated.')
}

const changePwFailure = function () {
  $('form').trigger('reset')
  const btnID = '#' + 'btnChangePassword'
  const originalColor = $(btnID).css('background-color')
  const originalValue = $(btnID).text()
  $(btnID).text('Something Went Wrong!').css('background-color', 'Red').animate({
    opacity: 0.25
  }, timingDelay, function () {
    $(btnID).animate({opacity: 1}).css('background-color', originalColor).text(originalValue)
  })
}

const signOutSuccess = function () {
  $('form').trigger('reset')
  $('.sign-in').show()
  $('.sign-up').show()
  $('.hidden').hide()
  $('.message').empty()
  // console.log('sign out succeed')
}

const signOutFailure = function () {
  $('form').trigger('reset')
  $('.message').text('Something went wrong, please try again.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePwSuccess,
  changePwFailure,
  signOutSuccess,
  signOutFailure

}

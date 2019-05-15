'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('form').trigger('reset')
  $('#signUpModal').modal('toggle')
}

const signUpFailure = function (data) {
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  $('form').trigger('reset')
  $('#signInModal').modal('toggle')
  console.log('data is ', data)
  store.user = data.user
}

const signInFailure = function (data) {
  $('form').trigger('reset')
}

const changePwSuccess = function () {
  $('form').trigger('reset')
  $('#changePasswordModal').modal('toggle')
}

const changePwFailure = function () {
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('form').trigger('reset')
  console.log('sign out succeed')
}

const signOutFailure = function () {
  $('form').trigger('reset')
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

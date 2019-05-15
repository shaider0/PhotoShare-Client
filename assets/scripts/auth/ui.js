'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('form').trigger('reset')
}

const signUpFailure = function (data) {
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  $('form').trigger('reset')
  console.log('data is ', data)
  store.user = data.user
}

const signInFailure = function (data) {
  $('form').trigger('reset')
}

const changePwSuccess = function () {
  $('form').trigger('reset')
}

const changePwFailure = function () {
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('form').trigger('reset')
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

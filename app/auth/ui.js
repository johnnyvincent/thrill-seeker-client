'use strict'

const store = require('../store')

const signUpSuccess = function (responseData) {
  $('#sign-up-success').text('Signed up successfully! Please sign in.').fadeOut(3000)

  $('#sign-up-success').text('Signed up successfully!').fadeOut(3000)

  $('form').trigger('reset')

  console.log('responseData is', responseData)
}

const signUpFailure = function (error) {
  $('#error-message').text('Sign up failed, please try again').fadeOut(3000)

  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  console.error('Error is', error)
}

const signInSuccess = function (responseData) {
  store.user = responseData.user
  console.log('store is', store)
  $('#sign-in-success').text('Signed in successfully!').fadeOut(3000)

  $('form').trigger('reset')

  $('#before-sign-in').hide()
  $('#after-sign-in').show()
  console.log('responseData is', responseData)
}

const signInFailure = function (error) {
  $('#error-message').text('Sign in failed').fadeOut(4000)

  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  console.error('Error is', error)
}

const signOutSuccess = function (responseData) {
  $('#sign-out-success').text('Signed out successfully!').fadeOut(3000)

  $('#form').trigger('reset')

  $('#after-sign-in').hide()
  $('#before-sign-in').show()

  console.log('responseData is', responseData)
}

const signOutFailure = function (error) {
  $('#parks-crud-error-message').text('Sign out failed')

  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  console.error('Error is', error)
}

const changePasswordSuccess = function (responseData) {
  $('#parks-crud-error-message').text('Password changed successfully!').fadeOut(3000)

  $('#form').trigger('reset')
  console.log('responseData is', responseData)
}

const changePasswordFailure = function (responseData) {
  $('#parks-crud-error-message').text('Password change failed, please try again!').fadeOut(3000)

  $('#form').trigger('reset')
  console.log('responseData is', responseData)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}

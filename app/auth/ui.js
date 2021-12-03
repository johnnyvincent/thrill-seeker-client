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
    $('#game-board').hide()
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
  
   // $('#game-display').removeClass()
   // $('#game-display').addClass('text-success')
    $('#form').trigger('reset')
  
    $('#after-sign-in').hide()
    $('#before-sign-in').show()
  
    console.log('responseData is', responseData)
  }
  
  const signOutFailure = function (error) {
    $('#error-message').text('Sign out failed')
  
    $('#error-message').removeClass()
    $('#error-message').addClass('text-danger')
  
    console.error('Error is', error)
  }
  
  module.exports = {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure,
    signOutSuccess,
    signOutFailure
  }
  
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// const setAPIOrigin = require('../../lib/set-api-origin')
// const config = require('./config')
// $(() => {
//   setAPIOrigin(location, config)
// })

// use require without a reference to ensure a file is bundled
// require('./example')

const parkEvents = require('./parks/events.js')
const authEvents = require('./auth/events.js')

$(() => {
  $('#parks-search').on('submit', parkEvents.onGetParks)
  $('#park-search').on('submit', parkEvents.onGetPark)
  $('#park-delete').on('submit', parkEvents.onDeletePark)
  $('#park-update').on('submit', parkEvents.onUpdatePark)
  $('#park-create').on('submit', parkEvents.onCreatePark)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
})

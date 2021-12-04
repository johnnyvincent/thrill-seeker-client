'use strict'

const getFormFields = require('../../lib/get-form-fields')
// const store = require('../store')
//
const api = require('./api')
const ui = require('./ui')

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked

const onCreatePark = function (event) {
  event.preventDefault()
  console.log('onCreatePark ran!')
  const form = event.target
  const formData = getFormFields(form)
  //   const parkName = formData.park.name
  //   const parkAddress = formData.park.address
  //   const parkTheme = formData.park.theme

  api
    .create(formData)
    .then(ui.onCreateParkSuccess)
    .catch(ui.onError)
}
const onGetParks = function (event) {
  event.preventDefault()
  console.log('onGetParks ran!')
  api.index()
    .then(ui.onGetParksSuccess)
    .catch(ui.onError)
}

const onGetPark = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  const parkName = formData.park.name
  api.show(parkName)
    .then(ui.onGetParkSuccess)
    .catch(ui.onError)
}

const onDeletePark = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)

  const parkName = formData.park.name
  api.destroy(parkName)
    .then(ui.onDeleteParkSuccess)
    .catch(ui.onError)
}

const onUpdatePark = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)

  //   const parkName = formData.park.name
  //   const parkAddress = formData.park.address
  //   const parkTheme = formData.park.theme
  api
    .update(formData)
    .then(ui.onUpdateParkSuccess)
    .catch(ui.onError)
}

module.exports = {
  onGetParks,
  onGetPark,
  onDeletePark,
  onUpdatePark,
  onCreatePark
}

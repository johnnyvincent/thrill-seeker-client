'use strict'

const getFormFields = require('../../lib/get-form-fields')
// const store = require('../store')
//
const parksApi = require('./api')
const parksUi = require('./ui')

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

const onGetParks = function (event) {
  event.preventDefault()
  parksApi.index()
    .then(parksUi.onGetParksSuccess)
    .catch(parksUi.onError)
}

const onGetPark = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  const parkName = formData.park.name
  parksApi.show(parkName)
    .then(parksUi.onGetParkSuccess)
    .catch(parksUi.onError)
}

const onDeletePark = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)

  const parkName = formData.park.name
  parksApi.destroy(parkName)
    .then(parksUi.onDeleteParkSuccess)
    .catch(parksUi.onError)
}

const onUpdatePark = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)

  const parkName = formData.park.name
  const parkAddress = formData.park.address
  const parkTheme = formData.park.theme
  parksApi
    .update(parkName, formData)
    .update(parkAddress, formData)
    .update(parkTheme, formData)
    .then(parksUi.onUpdateParkSuccess)
    .catch(parksUi.onError)
}

const onCreatePark = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  const parkName = formData.park.name
  const parkAddress = formData.park.address
  const parkTheme = formData.park.theme

  parksApi
    .create(parkName, formData)
    .create(parkAddress, formData)
    .create(parkTheme, formData)
    .then(parksUi.onCreateParkSuccess)
    .catch(parksUi.onError)
}

module.exports = {
  onGetParks,
  onGetPark,
  onDeletePark,
  onUpdatePark,
  onCreatePark
}

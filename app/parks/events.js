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
  console.log('on getPark ran!')
  const form = event.target
  const formData = getFormFields(form)

  const id = formData.park.id
  api.show(id)
    .then(ui.onGetParkSuccess)
    .catch(ui.onError)
}

const onDeletePark = function (event) {
  event.preventDefault()
  console.log('onDeletePark ran!')
  const form = event.target
  const formData = getFormFields(form)
  const id = formData.park.id
  api.destroy(id)
    .then(ui.onDeleteParkSuccess)
    .catch(ui.onError)
}

const onUpdatePark = function (event) {
  event.preventDefault()
  console.log('onUpdateMovie ran!')
  const form = event.target
  const formData = getFormFields(form)
  const id = formData.movie.id

  //   const parkName = formData.park.name
  //   const parkAddress = formData.park.address
  //   const parkTheme = formData.park.theme
  api
    .update(id, formData)
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

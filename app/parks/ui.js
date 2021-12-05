'use strict'

// const config = require('../config')
// const store = require('../store')

const onGetParksSuccess = (responseData) => {
  $('#find-parks-success').text('All Parks successfully received').fadeOut(3000)

  console.log('onIndexSuccess ran. responseData is :', responseData)

  let parksHtml = ''
  const parks = responseData.parks
  parks.forEach(park => {
    parksHtml += `
        <div>
            <p id="find-parks-success"></p>
            <h4>Name: ${park.name}</h4>
            <p>Address: ${park.address}</p>
            <p>Theme: ${park.theme}</p>
            <p>ID: ${park._id}</p>
    
    </div>
    `
  })

  $('#parks-display').html(parksHtml)
  $('#parks-display').removeClass()
}

const onGetParkSuccess = function (responseData) {
  $('#find-park-success').text('Park was found. Scroll up to view.').fadeOut(3000)
  const park = responseData.park
  console.log(responseData)
  const parksHtml = `
    <div>
    <h4>Name: ${park.name}</h4>
    <p>Address: ${park.address}</p>
    <p>Theme: ${park.theme}</p>
    
</div>
`

  $('#parks-display').html(parksHtml)
  $('form').trigger('reset')
}

const onDestroyParkSuccess = function (title = 'Park') {
  $('#delete-park-success').text(`${title} was destroyed successfully`).fadeOut(3000)
  $('#parks-display').addClass('text-success')
  setTimeout(() => {
    $('#parks-display').html('')
    $('#parks-display').removeClass('text-success')
  }, 5000)
  $('form').trigger('reset')
}

const onUpdateParkSuccess = function () {
  $('#update-park-success').text('Park was updated successfully. Click on "Get All Parks" to get updated parks').fadeOut(3000)
  $('form').trigger('reset')
}

const onCreateParkSuccess = function () {
  $('#create-park-success').text('Park was successfully created. Click Get All Parks to see updated list.').fadeOut(3000)
  $('form').trigger('reset')
}

const onError = function (err) {
  console.error(err)

  $('#parks-crud-error-message').text('Something went wrong, please try again').fadeOut(4000)
  $('#error-message').addClass('text-danger')
  setTimeout(() => {
    $('#error-message').html('')
    $('#error-message').removeClass('text-danger')
  }, 5000)
  $('form').trigger('reset')
}

module.exports = {
  onGetParksSuccess,
  onGetParkSuccess,
  onDestroyParkSuccess,
  onUpdateParkSuccess,
  onCreateParkSuccess,
  onError
}

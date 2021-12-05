'use strict'

// const config = require('../config')
// const store = require('../store')

const onGetParksSuccess = (responseData) => {
  $('#parks-display').text('All Parks successfully received')
  $('#parks-display').removeClass()
  console.log('onIndexSuccess ran. responseData is :', responseData)

  let parksHtml = ''
  const parks = responseData.parks
  parks.forEach(park => {
    parksHtml += `
        <div>
            <h4>Name: ${park.name}</h4>
            <p>Address: ${park.address}</p>
            <p>Theme: ${park.theme}</p>
            <p>ID: ${park._id}</p>
    
    </div>
    `
  })

  $('#parks-display').html(parksHtml)
}

const onGetParkSuccess = function (responseData) {
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
  $('#parks-display').text(`${title} was destroyed successfully`)
  $('#parks-display').addClass('text-success')
  setTimeout(() => {
    $('#parks-display').html('')
    $('#parks-display').removeClass('text-success')
  }, 5000)
  $('form').trigger('reset')
}

const onUpdateParkSuccess = function () {
  $('#parks-display').text('Park was updated successfully. Click on "Get All Parks" to get updated parks')
  $('form').trigger('reset')
}

const onCreateParkSuccess = function () {
  $('#parks-display').text('Park was successfully created')
  $('form').trigger('reset')
}

const onError = function (err) {
  console.error(err)

  $('#parks-crud-error-message').text('Something went wrong, please try again')
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

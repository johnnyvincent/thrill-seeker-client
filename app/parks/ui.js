'use strict'

const config = require('../config')
const store = require('../store')

const onGetParksSuccess = (responseData) => {
  const parks = responseData.books
  console.log(responseData)

  let parksHtml = ''

  parks.forEach(park => {
    parksHtml += `
        <div>
            <h4>Name: ${park.name}</h4>
            <p>Address: ${park.address}</p>
            <p>Theme: ${park.theme}</p>
        
         <button class="books-destroy-dynamic" data-id=${book._id}>
         Destroy Book </button>

         <form class="books-update-dynamic" data-id=${book._id}>
             <input type="text" name="book[title]" placeholder="Title" data-id=${book.title} required>
             <input type="text" name="book[author]" placeholder="Author" data-id=${book.author} required>
             <button>Update Book</button>
           </form>
    
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

  $('#error-message').text('Something went wrong, please try again')
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
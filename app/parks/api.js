'use strict'

const config = require('../config')
// const store = require('../store')

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/parks',
    method: 'GET'
  })
}

const show = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/parks/' + id,
    method: 'GET'
  })
}

const destroy = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/parks/' + id,
    method: 'DELETE'
  })
}

const update = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/parks/' + data.park.id,
    method: 'PATCH',
    data
  })
}

const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/parks',
    method: 'POST',
    data
  })
}

module.exports = {
  index,
  show,
  destroy,
  update,
  create
}

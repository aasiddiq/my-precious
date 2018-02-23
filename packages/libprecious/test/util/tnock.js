'use strict'

const nock = require('nock')
const clearMemoized = require('pacote').clearMemoized

module.exports = tnock
function tnock (t, host) {
  clearMemoized()
  const server = nock(host)
  t.tearDown(function () {
    server.done()
  })
  return server
}

import App from '../models/app.js'
import { describe, it } from 'mocha'
import assert from 'assert'

describe('The App class', function () {
  const myApp = new App()
  
  it('has an addUser method', function () {
    assert.equal(typeof myApp.addUser, 'function')
  })

  it('has a findUser method', function () {
    assert.equal(typeof myApp.findUser, 'function')
  })

  it('has a deliverMessage method', function () {
    assert.equal(typeof myApp.deliverMessage, 'function')
  })
  
})
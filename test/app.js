import App from '../models/app.js'
import User from '../models/user.js'
import { describe, it } from 'mocha'
import assert from 'assert'


describe('The App class', function () {
  const myApp = new App()
  const user = new User('Slim123')

  it('has an empty user array', () => {
    assert.strictEqual(myApp.users.length, 0)
  })
  
  it('has an addUser method', function () {
    assert.equal(typeof myApp.addUser, 'function')
  })

  it('should have an entry using addUser', () => {
    myApp.addUser(user)
    assert.strictEqual(myApp.users.length, 1)
  })

  it('has a findUser method', function () {
    assert.equal(typeof myApp.findUser, 'function')
  })

  it('should find user of the app', () => {
    myApp.resetUsers()
    user.login(myApp)
    let result = myApp.findUser('1')
    assert.strictEqual(result instanceof User, true)
  })

  it('has a deliverMessage method', () => {
    assert(
      'deliverMessage' in myApp,
      'App does not have a deliverMessage method')
  })

})
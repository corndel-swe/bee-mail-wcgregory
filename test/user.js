import User from '../models/user.js'
import App from '../models/app.js'
import { describe, it } from 'mocha'
import assert from 'assert'

describe('The User class', function () {
  User.resetId()
  const username = 'Freddy123'
  const user = new User(username)
  const myApp = new App()
  //myApp.resetUsers()
  user.login(myApp)

  it('should have an id value - string', function () {
    assert.equal(typeof user.id, 'string')
  })

  it('should have a non-null id value', function () {
    assert.strictEqual(user.id, '1')
  })

  it('should have a username attribute', () => {
    assert(
      'username' in user,
      "No username attribute found"
    )
    assert.strictEqual(user.username, username)
  })

  it('should have an empty inbox attribute', () => {
    assert.strictEqual(user.inbox.length, 0)
  })

  it('should contain an app attribute', () => {
    assert(
      'app' in user,
      "No app attribute found"
    )
  })

  it('should contain a login method', () => {
    assert(
      'login' in user,
      'User does not have a login method'
    )
  })

  it('should log user into the app and add the user to the app', () => {
    const userSearch = myApp.findUser('1')
    assert.strictEqual(user.app, myApp)
    assert.strictEqual(userSearch instanceof User, true)
    assert.strictEqual(userSearch.username, user.username)
  })

  it('should not add two users with the same id', () => {
    User.resetId()
    const userDup = new User('Freddy1234')
    userDup.login(myApp)
    assert.strictEqual(myApp.users.length, 1)
  })

  it('should contain a sendMessage method', () => {
    assert(
      'sendMessage' in user,
      'User does not have a sendMessage method'
    )
  })

  it('should contain a receiveMessage method', () => {
    assert(
      'sendMessage' in user,
      'User does not have a receiveMessage method'
    )
  })

  it('should contain a readMessage method', () => {
    assert(
      'sendMessage' in user,
      'User does not have a readMessage method'
    )
  })

})
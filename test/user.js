import User from '../models/user.js'
import { describe, it } from 'mocha'
import assert from 'assert'

describe('The User class', function () {
  const user = new User()

  it('should have an id value - string', function () {
    assert.equal(typeof user.id, 'string')
  })

  it('should have a non-null id value', function () {
    assert.strictEqual(user.id, '1')
  })

})
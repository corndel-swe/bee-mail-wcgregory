export default class User {
	static id = 1

  static resetId() {
    User.id = 1
  }

  static setId(id) {
    User.id = id
  }

	constructor(username) {
		this.id = User.id.toString()
    this.username = username
    this.inbox = []
    this.app = null
		
		// increment the id number
		User.id++
	}

  login(app) {
    app.addUser(this)
    this.app = app
  }

  sendMessage() {}

  receiveMessage() {}

  readMessage() {}
}
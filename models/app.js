export default class App {
	constructor() {
		this.users = Array()
	}

	addUser(user) {
    if (this.findUser(user.id)) {
		  return TypeError("Id already exists")
    } 
		this.users.push(user)
	}

  findUser(userId) {
    const result = this.users.find(({ id }) => id === userId)
    return result
	}

  deliverMessage(senderId, recipientId, content) {

  }

  resetUsers() {
		this.users = Array()
	}
}

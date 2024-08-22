export default class User {
	static id = 1

	constructor() {
		this.id = User.id.toString()
		
		// increment the id number
		User.id++
	}
}
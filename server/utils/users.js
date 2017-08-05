[{
	id: '#12poiadjspfoif',
	name: 'Andrew',
	room: 'The Office Fans'
}]

// class Person {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	getUserDescription() {
// 		return `${this.name} is ${this.age} year(s) old.`;
// 	}
// }

// var me = new Person('Andrew', 25);
// var description = me.getUserDescription();

// console.log(description);

//**********////**********//**********//**********//**********//**********//********************//**********


// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
	constructor() {
		this.users = [];
	}

	addUser(id, name, room) {
		var user = {id, name, room};
		this.users.push(user);

		return user;
	}

	removeUser(id) {
		//return user that was removed
		var user = this.users.filter((user) => user.id === id)[0];

		if (user) {
			this.users = this.users.filter((user) => user.id !== id);
		}

		return user;
	}

	getUser(id) {
		return this.users.filter((user) => user.id === id)[0];
	}

	getUserList(room) {
		var users = this.users.filter((user) => {
			return user.room === room;
		});

		var namesArray = users.map((user) => {
			return user.name;
		});

		return namesArray;
	}
}

module.exports = {Users};

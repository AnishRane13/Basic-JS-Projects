class User{
	constructor(email, password){
		this.email = email;
		this.password = password
	}
	get password(){
		return this._password.toUpperCase()
	}
	set password(value){
		this._password = value
	}
}

const anish = new User("anish@.com", "123")
console.log(anish.password)
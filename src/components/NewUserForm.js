import React, {Component} from 'react'

class NewUserForm extends Component{
	constructor(){
		super()
		this.state = {
			username: "",
			password: "",
			bio: ""
		}
	}

	inputUsername = (e) => {
		this.setState({username: e.target.value})
	}

	inputPassword = (e) => {
		this.setState({password: e.target.value})
	}

	inputBio = (e) => {
		this.setState({bio: e.target.value})
	}


	createUser = () => {
		fetch("http://localhost:3000/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			},
			body: JSON.stringify({
				username: this.state.username,
				password: this.state.password,
				description:	this.state.bio
			})
		})
	}
	render(){
		return(
			
				<div >
			<form className="new-form" onSubmit= {() => this.createUser()}>
				<div>
					Username: <input type="text" onChange={this.inputUsername}/>
					</div>
					<div>
					Password: <input type="text" onChange={this.inputPassword}/>
					</div>
					<div>
					Bio: <input type="text" onChange={this.inputBio}/>
					</div>
					<div>
					<button type="Submit"> Submit </button>
					</div>
			</form>
			</div>
		)
	}
}

export default NewUserForm
import React, {Component} from 'react'
import NewUserForm from './NewUserForm'
import HomePageContainer from '../Containers/HomepageContainer'
import {
	BrowserRouter as Router,
	Route,
  Link
} from "react-router-dom"; 
class Login extends Component{
	constructor(){
		super()
		this.state ={
			userObj: [],
			username: "",
			password: ""
		}
	}

	clickFun = () => {
		return window.location = '/signup'
	}

	checkUser = (event) => {
		event.preventDefault()
		let user = []
		fetch('http://localhost:3000/users')
		.then(response => response.json())
		.then(usersData => (
			this.setState({userObj: usersData.filter(user => user.username === this.state.username && user.password === this.state.password)})
		))
		}

		inputUsername = (event) => {
			this.setState({username: event.target.value})
		}

		inputPassword = (event) => {
			this.setState({password: event.target.value})
		}
		


	render(){
		return(
			<div>
			<form className="new-form" onSubmit={(event) => this.checkUser(event)}>
				<div>
					<input name="username" onChange={this.inputUsername}  type="text"/>
				</div>
				<div>
					<input name="password" onChange ={this.inputPassword}type="text"/>
				</div>
				<div>
					<button type="Submit" >Login</button>
					<button ><Link to={{
						pathname: "/homepage",
						state: {
							obj: this.state.userObj
						}
					}}>Button</Link></button>
					</div>
			</form>
			<div>
					<button type="Submit" onClick={() => {
						// this.changeUrl();
						this.clickFun();
					}}>Create Account</button>
					</div>
	</div>
		)
	}
}

export default Login
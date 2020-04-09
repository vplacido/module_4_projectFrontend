import React, {Component} from 'react'

class UserPostContainer extends Component {

	renderUser = () => {
		fetch("http://localhost:3000/users")
		.then(response => response.json())
		.then(usersData => console.log(usersData))
	}
	render(){
		return(
			<div>
				This is UserPostContainer
				{this.renderUser()}
			</div>
		)
	}
}

export default UserPostContainer
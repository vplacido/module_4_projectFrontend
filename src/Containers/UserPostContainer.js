import React, {Component} from 'react'
import NewPostForm from '../components/NewPostForm'
class UserPostContainer extends Component {
	constructor(){
		super()
		this.state = {
			url: "",
			content: ""
		}
	}
	renderUser = () => {
		fetch("http://localhost:3000/users")
		.then(response => response.json())
		.then(usersData => console.log(usersData))
	}

	newPost = (newPost) => {
		fetch("http://localhost:3000/posts",{
			method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
			body: JSON.stringify(
				newPost
			)
		})
		.then(response => response.json())
		.then(data => console.log(data))
		
	}
	render(){
		return(
			<div>
				<NewPostForm newPost={this.newPost}/>
				{this.renderUser()}
			</div>
		)
	}
}

export default UserPostContainer
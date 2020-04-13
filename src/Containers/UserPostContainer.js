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
	// renderUser = () => {
	// 	fetch("http://localhost:3000/users")
	// 	.then(response => response.json())
	// 	.then(usersData => console.log(usersData))
	// }

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
		
	}
	render(){
		return(
			<div className="container">
			<div className="top-half">
				<NewPostForm newPost={this.newPost}/>
				{/* {this.renderUser()} */}
			</div>
			<div className="bot-half">

			</div>
			</div>
		)
	}
}

export default UserPostContainer
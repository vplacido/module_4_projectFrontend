import React, {Component} from 'react'
import NewPostForm from '../components/NewPostForm'
class UserPostContainer extends Component {
	
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
			</div>
			<div className="bot-half">

			</div>
			</div>
		)
	}
}

export default UserPostContainer
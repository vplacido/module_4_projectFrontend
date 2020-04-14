import React, {Component} from 'react'
import { tsConditionalType } from '@babel/types'

class Comment extends Component {

	constructor(){
		super()
		this.state = {
			user: []
		}
	}

	componentDidMount(){
		fetch("http://localhost:3000/users")
		.then(response => response.json())
		.then(userData => (
			this.setState({
				user: userData.filter(user => (
					user.id === this.props.comment.user_id
				))
			})
		))
		this.setState({user: this.props.userObj})
	}

	postComment = () => {
		return this.state.user.map(user => (
			user.username
		))
	}


	render(){
		return(
			<div>
				<div className="imgContainer">
				<img className="img" src={this.state.user.map(user => user.profile_img)} />
				<p>{this.postComment()}</p>
				</div>
				<p>{this.props.comment.content}</p>



				<svg onClick={() => this.props.deleteComment(this.props.comment.id)}class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  				<path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/>
  				<path fill-rule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clip-rule="evenodd"/>
					</svg>
			</div>
		)
	}
}

export default Comment
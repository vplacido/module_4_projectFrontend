import React, {Component} from 'react'
import Comment from './Comment'
class CommentList extends Component {
	// constructor(){
	// 	super()
	// 	this.state = {
	// 		user: []
	// 	}
	// }

	// componentDidMount(){
	// 	fetch("http://localhost:3000/users")
	// 	.then(response => response.json())
	// 	.then(userData => (
	// 		this.setState({
	// 			user: userData.filter(user => (
	// 				user.id === 
	// 			))
	// 		})
	// 	))
	// }

	renderComment = () => {
		return this.props.allComment.map(comment => 
		<li>
			<Comment deleteComment={this.props.deleteComment}comment={comment}/>
		</li>)
	}
	render(){
		return(
			<ul>
				{this.renderComment()}
			</ul>
		)
	}
}

export default CommentList
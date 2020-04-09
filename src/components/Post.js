import React, {Component} from 'react'
import CommentList from './CommentList'
class Post extends Component {
	constructor(){
		super()
		this.state = {
			comments: [],
			user: [],
			showComment: false
		}
	}

	componentDidMount(){
		fetch("http://localhost:3000/comments")
		.then(response => response.json())
		.then(allComments => (
			this.setState({
				comments: allComments.filter(comment => comment.post_id === this.props.allData.id)
			})
		))
		fetch("http://localhost:3000/users")
		.then(response => response.json())
		.then(users => (
			this.setState({
				user: users.filter(user => user.id === this.props.allData.user_id)
			})
		))
	}

	renderComments = () => {
		this.setState({
			showComment: !this.state.showComment
		})
		return <p>{this.state.comments.map(comment => comment.content)}</p>
	}


	// when delete first comment weird error occurs // 
	deleteComment = (commentId) => {
		fetch(`http://localhost:3000/comments/${commentId}`, {
			method: "DELETE"
		})
		this.setState({
			comments: this.state.comments.filter(comment => (
				comment.id !== commentId
			))
		})
	}


	render(){
		console.log(this.state.user[0])
		return(
			<div>
				<div className="imgContainer">
				<img className="img" src={this.state.user.map(user => user.profile_img)}/>

				<p className="username">{this.state.user.map(user => user.username)}</p>
				</div>
					
					<img src={this.props.allData.img}/>
					<p>{this.props.allData.content}</p>
					{!this.state.showComment ? (
						<p onClick={this.renderComments}className="view-comments">{`view all ${this.state.comments.length} comments`}</p>
		) : (
			<div>
			<p onClick={this.renderComments}className="view-comments">{`hide all ${this.state.comments.length} comments`}</p>
			<CommentList deleteComment={this.deleteComment}user={this.state.user} allComment={this.state.comments}/></div>)}
			
			</div>
		)
	}
}

export default Post
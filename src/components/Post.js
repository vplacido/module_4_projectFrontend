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


	addToComment = (content, obj) => {
		fetch('http://localhost:3000/comments', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				user_id: 27,
				post_id: obj.id,
				content: content
			})
		})
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

	userProfile = (userObj) => {
		localStorage.setItem("username", JSON.stringify(userObj.username))
		localStorage.setItem("profile_img", JSON.stringify(userObj.profile_img))
		return window.location = `/users/${userObj.id}`
	}
	

	render(){
		return(
			<li className="PostLi">
				<div className="imgContainer">
					<img className="img" src={this.state.user.map(user => user.profile_img)}/>
					<p className="username" onClick={() => this.userProfile(this.state.user[0])}>{this.state.user.map(user => user.username)}</p>

				</div>
				<div className="postIMG">
					<img src={this.props.allData.img}/>
				</div>
				<div className="postInfo">
					<div className="likeCommentDiv">
						<div className="likeDiv">
							<button className="likeButton">


								<i className="fa fa-heart"></i>
							
					
							</button>
						</div>
							<button className="commentButton">
								<i onClick={this.renderComments} className="fa fa-comment-o"></i>
							</button>
					</div>
					<div className="likesDiv">
						<p><span>&#8734;</span> Likes</p>
					</div>
					
					<p>{this.props.allData.content}</p>
					{!this.state.showComment ? (
						<p onClick={this.renderComments} className="view-comments">{`view all ${this.state.comments.length} comments`}</p>
					) : (
					<div>
						<p onClick={this.renderComments} className="view-comments">{`hide all ${this.state.comments.length} comments`}</p>
						<CommentList post={this.props.post} deleteComment={this.deleteComment}user={this.state.user} allComment={this.state.comments}
						addToComment = {this.addToComment}
						/>
					</div>
					)}
				</div>
			</li>
		)
	}
}

export default Post
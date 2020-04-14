import React, {Component} from 'react'
import CommentList from './CommentList'
class Post extends Component {
	constructor(){
		super()
		this.state = {
			comments: [],
			user: [],
			showComment: false,
			userObj: []
		}
	}

	componentDidMount(){
		this.setState({userObj: this.props.userObj})
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
		console.log(this.state.userObj.map(user=> user.id)[0], this.props.post.user_id)
		return(
			<li className="PostLi">
				{ this.state.userObj.map(user=> user.id)[0] === this.props.post.user_id ? (
						<svg onClick={() => this.deletePost(this.props.post.id)}class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/>
						<path fill-rule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clip-rule="evenodd"/>
						</svg>
				) : null }
			

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
						<CommentList userObj={this.props.userObj} post={this.props.post} deleteComment={this.deleteComment}user={this.state.user} allComment={this.state.comments}
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
import React, {Component} from 'react'
import Comment from './Comment'
class CommentList extends Component {

	constructor(){
		super()
		this.state = {
			content: ""
		}
	}



	renderComment = () => {
		return this.props.allComment.map(comment => 
		<li>
			<Comment deleteComment={this.props.deleteComment}comment={comment}/>
		</li>
		)
	}

	newContent = (e) => {
		this.setState({
			content: e.target.value
		})
	}



	render(){

		
		return(
			<div>
				<form onSubmit={ () => this.props.addToComment(this.state.content, this.props.post)}>
				<input type="text" placeholder="write a comment here..." onChange={this.newContent}/>
				</form>
			<ul>
				{this.renderComment()}
			</ul>
			</div>
		)
	}
}

export default CommentList
import React, {Component} from 'react'

class Post extends Component {
	constructor(){
		super()
		this.state = {
			comments: [],
			user: []
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


	render(){
		console.log(this.state.user[0])
		return(
			<div>
				<div className="imgContainer">
				<img className="img" src={this.state.user.map(user => user.profile_img)}/>
				</div>

				
				<p className="username">{this.state.user.map(user => user.username)}</p>
					
					<img src={this.props.allData.img}/>
					<p>{this.props.allData.content}</p>
					<p>{this.state.comments.map(comment => comment.content)}</p>
			</div>
		)
	}
}

export default Post
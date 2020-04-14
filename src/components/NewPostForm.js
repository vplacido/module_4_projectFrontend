import React, {Component} from 'react'

class NewPostForm extends Component {

	inputHandler = (event) => {
		event.preventDefault()
		let newPost = {
			user_id: 22,
			img: event.target.url.value,
			content: event.target.content.value
		}
		this.props.newPost(newPost)
	}

	render(){
		return(
			// dropbox if possible //
			<div>
				<form className="new-form"
				onSubmit={(event) => this.inputHandler(event)}
				>
					<div>
					<input type="text" name="url" placeholder="URL"/>
					</div>
					<div>
					<input type="text" name="content" placeholder="Content" />
					</div>
					<div>
					<button type="Submit">Publish</button>
					
					</div>
				</form>
			</div>
		)
	}
}

export default NewPostForm
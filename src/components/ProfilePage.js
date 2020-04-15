import React, {Component} from 'react'

class ProfilePage extends Component {
	constructor() {
		super()
		this.state = {
			posts: []
		}
	}

	componentDidMount() {
		fetch("http://localhost:3000/posts")
		.then(response => response.json())
		.then(post => this.setState({posts: post.filter(p => p.user_id.toString() === localStorage.user_id)}))
	}

	renderPost = (post) => {
		return (
			<li className="user-photos-list-item">
				<img src={post.img} alt="fake post"/>
			</li>
		)
	}

	editUser = () => {
		
	}

	render(){
		return(
			<div className="container">
				<div className="profile">
					<div className="profile-image">
						<img src={localStorage.profile_img.replace(/["']/g, "")} alt="" />
					</div>
					<div className="profile-user-settings">
						<h1 className="profile-user-name">{localStorage.username.replace(/["']/g, "")}</h1>
						<button className="btn profile-edit-btn" onClick={this.editUser}>Edit Profile</button>
						<button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button>
					</div>

					<div className="profile-stats">
						<ul>
							<li><span className="profile-stat-count">164</span> posts</li>
							<li><span className="profile-stat-count">188</span> followers</li>
							<li><span className="profile-stat-count">206</span> following</li>
						</ul>
					</div>

					<div className="profile-bio">
						<p><span className="profile-real-name">{localStorage.username.replace(/["']/g, "")}</span> {localStorage.getItem("bio")}</p>
					</div>
				</div>
				
				<div className="user-photos">
					<ul className="user-photos-list">
						{this.state.posts.length>0 ? (this.state.posts.map(post => this.renderPost(post))) : (null)}
					</ul>
				</div>
			</div>			
		)
	}
}
export default ProfilePage
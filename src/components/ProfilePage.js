import React, {Component} from 'react'

class ProfilePage extends Component {
	render(){
		return(


	<div className="container">

		<div className="profile">

			<div className="profile-image">

				<img src={localStorage.profile_img.replace(/["']/g, "")} alt="" />

			</div>
	

			<div className="profile-user-settings">

				<h1 className="profile-user-name">{localStorage.username.replace(/["']/g, "")}</h1>

				<button className="btn profile-edit-btn">Edit Profile</button>

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

				<p><span className="profile-real-name">{localStorage.username.replace(/["']/g, "")}</span> user bio 📷✈️🏕️</p>

			</div>

		</div>
		</div>
		
		)
}
}
export default ProfilePage
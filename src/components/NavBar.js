import React, {Component} from 'react'

class NavBar extends Component {
	render(){
		return(
			<div>
			<nav class="navbar navbar-light bg-light">
  		<span class="navbar-brand mb-0 h1"><i class="fab fa-instagram"></i></span>
			<span class="navbar-brand mb-0 h1">SearchBar</span>
			<span class="navbar-brand mb-0 h1">FriendRequest</span>
			<span class="navbar-brand mb-0 h1">Profile</span>
			<span class="navbar-brand mb-0 h1">Logout</span>
			</nav>
			</div>
		)
	}
}

export default NavBar
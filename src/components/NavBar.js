import React, {Component} from 'react'
import SearchBar from './SearchBar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
class NavBar extends Component {
	constructor(){
		super()
		this.state = {
			allUsers: [],
			searchUser: ""
		}
	}

	componentDidMount(){
		fetch("http://localhost:3000/users")
		.then(response => response.json())
		.then(usersData => (
			this.setState({allUsers: usersData})
		))
	}


	updateSearchState = (term) => {
		this.setState({searchUser: term})
	}


	newPost = () => {
		return window.location = "/posts/new"
	}
	homepage = () => {
		return window.location = "/homepage"
	}
	render(){

		let filteredUser = this.state.allUsers.filter(user => user.username.includes(this.state.searchUser))
		return(
			<Router>
			<div>
			<nav className="navbar navbar-light bg-light">
				<div className=".col-xs-6 .col-md-4">
					<span className="navbar-brand mb-0 h1">
					<Link to="/homepage">
					<svg onClick={() => {return window.location ="/homepage"}}className="bi bi-star" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  				<path fillRule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 00-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 00-.163-.505L1.71 6.745l4.052-.576a.525.525 0 00.393-.288l1.847-3.658 1.846 3.658a.525.525 0 00.393.288l4.052.575-2.906 2.77a.564.564 0 00-.163.506l.694 3.957-3.686-1.894a.503.503 0 00-.461 0z" clipRule="evenodd"/>
					</svg>
					</Link>
					</span>
				</div>
				<div className=".col-xs-6 .col-md-4">
					<span className="navbar-brand mb-0 h1"><SearchBar searchTerm={this.state.searchUser}filteredUser={filteredUser}updateSearchState={this.updateSearchState}/></span>
				</div>
			<div className=".col-xs-6 .col-md-4">
			<span className="navbar-brand mb-0 h1">
			<svg onClick={() => {this.newPost()}}className="bi bi-plus-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  			<path fillRule="evenodd" d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z" clipRule="evenodd"/>
  			<path fillRule="evenodd" d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z" clipRule="evenodd"/>
  			<path fillRule="evenodd" d="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z" clipRule="evenodd"/>
			</svg>
			</span>
				<Link to="/users/:id"><span className="navbar-brand mb-0 h1">
					<svg className="bi bi-people-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  				<path fillRule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 100-6 3 3 0 000 6zm-5.784 6A2.238 2.238 0 015 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 005 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clipRule="evenodd"/>
			</svg>
				</span>
				</Link>
				<span className="navbar-brand mb-0 h1">
					<svg className="bi bi-people-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  				<path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 008 15a6.987 6.987 0 005.468-2.63z"/>
  				<path fillRule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
  				<path fillRule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z" clipRule="evenodd"/>
					</svg>
				</span>
				<span className="navbar-brand mb-0 h1">
					<svg className="bi bi-box-arrow-down-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  				<path fillRule="evenodd" d="M3 1.5A1.5 1.5 0 001.5 3v8A1.5 1.5 0 003 12.5h4a.5.5 0 000-1H3a.5.5 0 01-.5-.5V3a.5.5 0 01.5-.5h8a.5.5 0 01.5.5v4a.5.5 0 001 0V3A1.5 1.5 0 0011 1.5H3zm11 7a.5.5 0 01.5.5v5a.5.5 0 01-.5.5H9a.5.5 0 010-1h4.5V9a.5.5 0 01.5-.5z" clipRule="evenodd"/>
  				<path fillRule="evenodd" d="M14.354 14.354a.5.5 0 01-.708 0l-8-8a.5.5 0 11.708-.708l8 8a.5.5 0 010 .708z" clipRule="evenodd"/>
					</svg>
				</span>
			</div>
			</nav>
			</div>
			</Router>
		)
	}
}

export default NavBar
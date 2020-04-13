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
	render(){
		return(
			<Router>
			<div>
			<nav className="navbar navbar-light bg-light">
				<div className=".col-xs-6 .col-md-4">
					<span className="navbar-brand mb-0 h1"><i className="fa fa-download"></i></span>
				</div>
				<div className=".col-xs-6 .col-md-4">
					<span className="navbar-brand mb-0 h1"><SearchBar /></span>
				</div>
			<div className=".col-xs-6 .col-md-4">
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
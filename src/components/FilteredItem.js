import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";


class FilteredItem extends Component {
	render(){
		return(
			<div>
			<Link to={`/users/${this.props.item.id}`} ><p onClick={() => window.location=`/users/${this.props.item.id}`}>{this.props.item.username}</p></Link>
			</div>
		)
	}
}

export default FilteredItem
import React, {Component} from 'react'
import Post from '../components/Post'
class HomePageContainer extends Component {
	constructor(){
		super()
		this.state = {
			allData: []
		}
	}

	componentDidMount(){
		fetch("http://localhost:3000/posts")
		.then(response => response.json())
		.then(allData => (
			this.setState({
				allData: allData
			})
		))
	}

	renderPosts = () => {
	return	this.state.allData.map(data => <li className="PostLi"><Post allData={data}/></li>)
	}
	render(){
		return(
			<div>
				<ul className="PostUl">
					{this.renderPosts()}
				</ul>
			</div>
		)
	}
}

export default HomePageContainer
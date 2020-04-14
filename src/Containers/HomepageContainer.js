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


	// <li className="PostLi"><Post allData={data}/></li>)
	renderPosts = () => {
		// return	this.state.allData.map(data => <Post allData={data}/>)
		let arr = []
		for(let i = this.state.allData.length -1; i > -1; i--) {
			let post = this.state.allData.find(post => post.id === this.state.allData[i].id)
			arr.push(<Post post={post} key={this.state.allData[i].id} allData ={this.state.allData[i]} />) 
		}
		return arr
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
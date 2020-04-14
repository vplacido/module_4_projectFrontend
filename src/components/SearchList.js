import React, {Component} from 'react'
import FilteredItem from './FilteredItem'


class SearchList extends Component {

	renderFilteredItem = () => {
		return this.props.filteredItem.map(item => <FilteredItem item={item}/>)
	}
	render(){
		return(
			<div>
				{this.renderFilteredItem()}
			</div>
		)
	}
}

export default SearchList
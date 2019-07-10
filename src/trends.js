import React, {Component} from 'react';
import './right-sidebar.css';


class Trends extends Component {
	//data
	state = {
		hashtag: this.props.hashtag
	}
	//functions





	//render
	render() {
		return (
			<li>trend</li>
			
			// <li onClick={()=> this.props.selectHashtag(this.state.hashtag._id)} className={ this.state.hashtag.active ? 'active' : '' }># {this.state.hashtag.name}</li>
		)
	}
}



export default Trends;

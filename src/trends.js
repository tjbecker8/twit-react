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
			<li onClick={()=> this.props.selectHashtag(this.state.hashtag._id)} className={ this.state.hashtag.active ? 'active' : '' }># {this.state.hashtag.hashtag}</li>
		)
	}
}



export default Trends;

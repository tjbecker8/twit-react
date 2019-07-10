import React, {Component} from 'react';
import './tweets.css';


class Trendsnewtweet extends Component {
	//data
	state = {
		hashtag: this.props.hashtag
	}
	//functions





	//render
	render() {
		return (
			<li onClick={()=> this.props.selectHashtag(this.state.hashtag._id)} className={ this.state.hashtag.active ? 'active' : '' }># {this.state.hashtag.name}</li>
		)
	}
}



export default Trendsnewtweet;

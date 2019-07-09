import React, {Component} from 'react';
import Tweet from './tweet'
import Newtweet from './new-tweet'
import './tweets.css';

class Tweets extends Component {
	//data
	state = {

	}
	//functions





	//render
	render() {
		return (
			<div id="tweets" className="col-6">
						<Newtweet />
						<Tweet />
			</div>
		)
	}
}



export default Tweets;

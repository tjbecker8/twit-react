import React, {Component} from 'react';
import Tweet from './tweet'
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
						<div className="card mb-3" >
							<div id="tweet-head" className="card-body">
								<h3>Tweets</h3>
			 				</div>
						</div>
						<Tweet />
			</div>
		)
	}
}



export default Tweets;

import React, {Component} from 'react';
import Leftsidebar from './left-sidebar'
import Rightsidebar from './right-sidebar'
import Tweets from './tweets'
import './content.css';
class Maincontent extends Component {
	//data
	state = {
		hashtag: ''
	}
	//functions
	// getTweets = (id) => {
	// 		console.log('id', id);
	// 		this.setState({
	// 			hashtag: id
	// 		}, () => {
	// 			console.log('kkk', this.state.hashtag);
	// 		})
	// 	}




	//render
	render() {
		return (
			<div id="main-content" className="container-fluid">
				<div className="row">
					<Leftsidebar />
					<Tweets hashtag={this.state.hashtag} />
					<Rightsidebar getTweets={this.getTweets} />
				</div>
			</div>
		)
	}
}



export default Maincontent;

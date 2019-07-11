import React, {Component} from 'react';
import './right-sidebar.css';
// import Trends from './trends'
// import axios from 'axios'

class Rightsidebar extends Component {
	//data
	state = {
		hashtags: []
	}
	//functions
	// componentDidMount() {
	// 		axios.get(`http://localhost:4000/api/hashtag`).then((res)=> {
	// 				res.data[0].active = true
	// 				this.setState({
	// 					hashtags: res.data
	// 				})
	// 		this.selectHashtag(res.data[0]._id)
	// 		}).catch((err)=> {
	// 			console.log('err', err);
	// 		})
	// 	}

		// selectHashtag = (id) => {
		// 	let hashtags = this.state.hashtags
		// 	hashtags.map((c)=> c.active = false)
		// 	let hashtag = hashtags.find((c) => c._id === id)
		// 	hashtag.active = true
		// 	this.setState({hashtags})
		// 	// console.log(this.state.channels);
		//
		// 	this.props.getTweets(id)
		// }




	//render
	render() {
		return (
			<div id="right-sidebar" className="col">

				<div id="trending">
					<div className="card" >

						<div className="card-body">
						<h5 className="card-title">Worldwide Trends</h5>
						<ul className="list-unstyled">
							<li>trend</li>
						</ul>
					</div>

					</div>
				</div>
			</div>
		)
	}
}



export default Rightsidebar;

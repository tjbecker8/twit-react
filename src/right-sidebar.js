import React, {Component} from 'react';
import './right-sidebar.css';
import Trends from './trends'
import axios from 'axios'

class Rightsidebar extends Component {
	//data
	state = {
		hashtags: []
	}
	//functions
	componentDidMount() {
			axios.get(`http://localhost:4000/api/hashtag`).then((res)=> {
				// console.log('resss', res.data[0]._id);
					res.data[0].active = true
					this.setState({
						hashtags: res.data
					})
			this.selectChannel(res.data[0]._id)
			}).catch((err)=> {
				console.log('err', err);
			})
		}

		selectHashtag = (id) => {
			let hashtags = this.state.hashtags
			hashtags.map((c)=> c.active = false) //add the active property to each element
			// channels.map((c) => delete c.active) //delete a property
			// channels.forEach((c) => delete c.active) //this works too to remove active property
			let hashtag = hashtags.find((c) => c._id === id)
			hashtag.active = true
			this.setState({hashtags})
			// console.log(this.state.channels);

			// this.props.getMessages(id)
		}




	//render
	render() {
		return (
			<div id="right-sidebar" className="col">
			
				<div id="trending">
					<div className="card" >

						<div className="card-body">
						<h5 className="card-title">Worldwide Trends</h5>
						<ul>

							<Trends />


						</ul>
					</div>

					</div>
				</div>
			</div>
		)
	}
}



export default Rightsidebar;

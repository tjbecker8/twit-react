import React, {Component} from 'react';
import './right-sidebar.css';
import Addhashtag from './addhashtag'
import axios from 'axios'

class Rightsidebar extends Component {
	//data
	state = {
		hashtags: []
	}
	//functions

	createHashtag = (e, text) => {
			e.preventDefault()
				let hashtag = {
					name: text,
				}
				axios.post('http://localhost:4000/api/hashtag', hashtag, {headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}}
			).then((res)=> {
					console.log('res', res);
				}).catch((err)=> {
					console.log('err', err);
				})
		}



	//render
	render() {
		return (
			<div id="right-sidebar" className="col">

				<div id="trending">
					<div className="card" >

						<div className="card-body">
						<h5 className="card-title">Add a Hashtag</h5>

							<Addhashtag createHashtag={this.createHashtag} />

					</div>

					</div>
				</div>
			</div>
		)
	}
}



export default Rightsidebar;

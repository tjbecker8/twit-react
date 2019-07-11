import React, {Component} from 'react';
import './right-sidebar.css';
import Addhashtag from './addhashtag'
// import axios from 'axios'

class Rightsidebar extends Component {
	//data
	state = {
		hashtags: []
	}
	//functions





	//render
	render() {
		return (
			<div id="right-sidebar" className="col">

				<div id="trending">
					<div className="card" >

						<div className="card-body">
						<h5 className="card-title">Add a Hashtag</h5>
						<ul className="list-unstyled">
							<Addhashtag />
						</ul>
					</div>

					</div>
				</div>
			</div>
		)
	}
}



export default Rightsidebar;

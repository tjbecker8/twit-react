import React, {Component} from 'react';
import './right-sidebar.css';
import Trends from './trends'


class Rightsidebar extends Component {
	//data
	state = {

	}
	//functions





	//render
	render() {
		return (
			<div id="right-sidebar" className="col">
				<div id="new">
					<div className="card" >
					  <div className="card-body">
					    <h5 className="card-title">New to Twitter</h5>
					    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
					    <p className="card-text">Sign up now to get your own personalized timeline!</p>
					    <a href="#" className="card-link">Sign Up</a>

					  </div>
					</div>
				</div>
				<div id="trending">
					<div className="card" >

						<Trends />

					</div>
				</div>
			</div>
		)
	}
}



export default Rightsidebar;

import React, {Component} from 'react';
import './left-sidebar.css';


class Leftsidebar extends Component {
	//data
	state = {

	}
	//functions





	//render
	render() {
		return (
			<div id="left-sidebar" className="col">
			<div className="profile">
				<div className="card" >
					<div className="card-body profile">
						<h5 className="card-title">Username</h5>
						<h6 className="card-subtitle mb-2 text-muted">twitter handel</h6>
						<p className="card-text">about me!</p>
						<ul>
							<li>location</li>
							<li>website</li>
							<li>date joined</li>
						</ul>

					</div>
				</div>
			</div>

		</div>
		)
	}
}



export default Leftsidebar;

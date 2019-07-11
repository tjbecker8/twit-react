import React, {Component} from 'react';
import Logout from './logout'
import Home from './home'

class Topnav extends Component {
	//data
	state = {

	}
	//functions





	//render
	render() {
		return (
			<nav id="navigate" className="navbar navbar-expand-lg navbar-light bg-light">
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item active">
									<Home />
								</li>
								<li className="nav-item">
									<Logout />
								</li>
							</ul>
						</div>
					</nav>
		)
	}
}



export default Topnav;

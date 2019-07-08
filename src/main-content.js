import React, {Component} from 'react';
import Leftsidebar from './left-sidebar'
import Rightsidebar from './right-sidebar'
import Tweets from './tweets'

class Maincontent extends Component {
	//data
	state = {

	}
	//functions





	//render
	render() {
		return (
			<div id="main-content" className="container-fluid">
				<div className="row">
					<Leftsidebar />

					<Rightsidebar />
				</div>
			</div>
		)
	}
}



export default Maincontent;

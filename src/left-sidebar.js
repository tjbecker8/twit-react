import React, {Component} from 'react';
import './left-sidebar.css';

import axios from 'axios'
class Leftsidebar extends Component {
	//data
	state = {
		users: []
	}
	//functions

	componentWillMount() {
			axios.get(`${process.env.REACT_APP_API}/api/users`).then((res)=> {
				console.log('users', res.data);
				this.setState({
					users: res.data
				})
			}).catch((err)=> {
				console.log('err', err);
			})
		}



	//render
	render() {
		return (
			<div id="left-sidebar" className="col">
			<div className="profile">
				<div className="card" >
					<div className="card-body profile">
						<h5 className="card-title">Welcome!</h5>
						<h6 className="card-subtitle mb-2 text-muted">twitter handel</h6>

					</div>
				</div>
			</div>

		</div>
		)
	}
}



export default Leftsidebar;

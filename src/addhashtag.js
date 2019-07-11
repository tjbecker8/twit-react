import React, {Component} from 'react';
import './right-sidebar.css';


class Addhashtag extends Component {
	//data
	state = {
		hashtag: this.props.hashtag
	}
	//functions





	//render
	render() {
		return (
<form>
			<div className="input-group mb-3">
  			<input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  				<div className="input-group-append">
    				<button className="btn btn-outline-secondary" type="button">Button</button>
  				</div>
			</div>
			</form>

		)
	}
}



export default Addhashtag;

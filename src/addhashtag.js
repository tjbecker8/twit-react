import React, {Component} from 'react';
import './right-sidebar.css';

// import axios from 'axios'
class Addhashtag extends Component {
	//data
	state = {
		text: '',
	}
	//functions
	changeText = (e) => {
			this.setState({
				text: e.target.value
			})
		}

		clearHashtag = () => {
			this.setState({
				text: ''
			})
		}






	//render
	render() {
		return (
			<form onSubmit= {(e) => {
					this.props.createHashtag(e, this.state.text);
					this.clearHashtag()}
				}>
				<div className="input-group mb-3">
  				# <input type="text" className="form-control" placeholder="hashtag" value={this.state.text} onChange={(e) => this.changeText(e)} />
  				<div className="input-group-append">
    				<button className="btn btn-outline-secondary" type="submit">Submit</button>
  				</div>
				</div>
			</form>

		)
	}
}



export default Addhashtag;

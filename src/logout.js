import React, {Component} from 'react';



class Logout extends Component {
	//data
	state = {

	}
	//functions

	logout= (e) => {
		console.log('hello');
		localStorage.removeItem('token')
		window.location.reload()
 }



	//render
	render() {
		return (
			<button onClick={this.logout} type="button" className="btn btn-danger">logout</button>
		)
	}
}



export default Logout;

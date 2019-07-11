import React, {Component} from 'react';



class LoginRedirect extends Component {
	//data
	state = {

	}
	//functions

	loginNavigate = (e) => {
		window.location = '/login'
 }



	//render
	render() {
		return (
			<button onClick={this.LoginNavigate} type="button" className="btn btn-primary">Login</button>
		)
	}
}



export default LoginRedirect;

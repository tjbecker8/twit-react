import React, {Component} from 'react';



class Home extends Component {
	//data
	state = {

	}
	//functions

	home = (e) => {
		window.location.reload()
 }



	//render
	render() {
		return (
			<button onClick={this.home} type="button" className="btn btn-primary">Home</button>
		)
	}
}



export default Home;

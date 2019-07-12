import React, {Component} from 'react';

import axios from 'axios'

class Like extends Component {
	//data
	state = {
		count: 0,
		id: this.props.id
	}
	//functions

	like = () => {
    this.setState(prevState => {
       return {count: prevState.count + 1}
    })
		console.log('id please', this.state.id);
		axios.patch(`http://localhost:4000/api/tweets/${this.state.id}`, {likes: this.state.count})
}





	//render
	render() {
		return (
			<button onClick={this.like} type="button" className="btn btn-primary btn-sm">Like {this.state.count}</button>
		)
	}
}



export default Like;

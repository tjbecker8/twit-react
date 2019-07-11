import React, {Component} from 'react';



class Like extends Component {
	//data
	state = {
		count: 0,
	}
	//functions

	like = () => {
    this.setState(prevState => {
       return {count: prevState.count + 1}
    })
}



	//render
	render() {
		return (
			<button onClick={this.like} type="button" className="btn btn-primary btn-sm">Like {this.state.count}</button>
		)
	}
}



export default Like;

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
		console.log('count', this.state.count);
		axios.patch(`http://localhost:4000/api/tweets/${this.state.id}`,{likes: this.state.count} , {headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}}
		).then((res)=> {
			console.log('res', res.data);
			let likes = this.state.count
			this.setState({likes})
		}).catch((err)=> {
			console.log('err', err);
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

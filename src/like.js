import React, {Component} from 'react';

import axios from 'axios'

class Like extends Component {
	//data
	state = {
		count: this.props.like,
		id: this.props.id
	}
	//functions

	like = () => {
    this.setState(prevState => {
       return {count: prevState.count + 1}
    }, ()=>{
			axios.patch(`${process.env.REACT_APP_API}/api/tweets/${this.state.id}`,{likes: this.state.count} , {headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}}
			).then((res)=> {

			}).catch((err)=> {
				console.log('err', err);
			})
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

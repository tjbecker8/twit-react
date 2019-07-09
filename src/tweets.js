import React, {Component} from 'react';
import Tweet from './tweet'
import Newtweet from './new-tweet'
import './tweets.css';
import axios from 'axios'
class Tweets extends Component {
	//data
	state = {
		messages: [],
		channel: ''
	}
	//functions

	componentWillMount() {

			axios.get('http://localhost:4000/api/tweets').then((res)=> {
				// console.log(res.data);
				this.setState({
					messages: res.data
				})
			}).catch((err)=> {
				console.log('err', err);
			})
		}

		componentWillReceiveProps(props) {
			this.setState({
				channel: props.channel
			})
			axios.get(`http://localhost:4000/api/tweets?hashtag=${props.channel}`).then((res)=> {
				this.setState({
					messages: res.data
				})
			}).catch((err)=> {
				console.log('err', err);
			})
		}

		createMessage = (e, text) => {
				e.preventDefault()
					let message = {
						body: text,
						channel: this.state.channel,
					}
					axios.post('http://localhost:4000/api/tweets', message, {headers: {
						Authorization: `Bearer ${localStorage.getItem('token')}`
					}}
				).then((res)=> {
						let messages = this.state.messages
						messages.push(res.data)
						this.setState({messages})
					}).catch((err)=> {
						console.log('err', err);
					})
		}


	//render
	render() {
		return (
			<div id="tweets" className="col-6">
				<Newtweet createMessage={this.createMessage} />
				{
						this.state.messages.map((m)=> {
							return <Tweet message={m} key={m._id} />
						})
					}

			</div>
		)
	}
}



export default Tweets;

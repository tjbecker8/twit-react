import React, {Component} from 'react';
import Tweet from './tweet'
import Newtweet from './new-tweet'
import './tweets.css';
import axios from 'axios'
class Tweets extends Component {
	//data
	state = {
		tweets: [],
		hashtag: '',
	}
	//functions
	getTweets = (id) => {
			console.log('id', id);
			this.setState({
				hashtag: id
			}, () => {
				axios.get(`http://localhost:4000/api/tweets?hashtag=${this.state.hashtag}`).then((res)=> {

					this.setState({
						tweets: res.data
					})
				}).catch((err)=> {
					console.log('err', err);
				})
			})
		}


	componentWillMount() {
			axios.get('http://localhost:4000/api/tweets').then((res)=> {
				// console.log(res.data);
				this.setState({
					tweets: res.data
				})
			}).catch((err)=> {
				console.log('err', err);
			})
		}

		// componentWillReceiveProps(props) {
		// 	console.log(props.hashtag);
		// 	this.setState({
		// 		hashtag: props.hashtag
		// 	})
			// axios.get(`http://localhost:4000/api/tweets?hashtag=${this.state.hashtag}`).then((res)=> {
			//
			// 	this.setState({
			// 		tweets: res.data
			// 	})
			// }).catch((err)=> {
			// 	console.log('err', err);
			// })


		createTweet = (e, text) => {
				e.preventDefault()
					let tweet = {
						body: text,
						hashtag: this.state.hashtag,
					}
					axios.post('http://localhost:4000/api/tweets', tweet, {headers: {
						Authorization: `Bearer ${localStorage.getItem('token')}`
					}}
				).then((res)=> {
						let tweets = this.state.tweets
						tweets.push(res.data)
						this.setState({tweets})
					}).catch((err)=> {
						console.log('err', err);
					})
		}


	//render
	render() {
		return (
			<div id="tweets" className="col-6">
				<Newtweet getTweets={this.getTweets} createTweet={this.createTweet} />
				{
						this.state.tweets.map((m)=> {
							return <Tweet tweet={m} key={m._id} />
						})
					}

			</div>
		)
	}
}



export default Tweets;

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
		hashtags: ''
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

		selectHashtag = (id) => {
			let hashtags = this.state.hashtags
			hashtags.map((c)=> c.active = false)
			let hashtag = hashtags.find((c) => c._id === id)
			hashtag.active = true
			this.setState({hashtags})
			// console.log(this.state.channels);

			this.props.getTweets(id)
		}


	//render
	render() {
		return (
			<div id="tweets" className="col-6">
				<Newtweet selectHashtag={this.selectHashtag} getTweets={this.getTweets} createTweet={this.createTweet} />
				{
						this.state.tweets.map((m)=> {
							console.log('m', m.hashtag.name);
							return <Tweet selectHashtag={this.selectHashtag} tweet={m} key={m._id} hashtag={m.hashtag.name} />
						})
					}

			</div>
		)
	}
}



export default Tweets;

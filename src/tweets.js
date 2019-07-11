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
		hashtags: [],

	}
	//functions


	hashes =(h)=> {
		console.log('h', h);
		this.setState({
			hashtags: h
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
			console.log('id', id);
			console.log('test', this.state.hashtags);
			let hashtags = this.state.hashtags
			hashtags.map((c)=> c.active = false)
			let hashtag = hashtags.find((c) => c._id === id)
			hashtag.active = true
			this.setState({hashtags})
			this.setState({
				hashtag: id
			})
			this.getTweets(id)
		}

		getTweets (id) {
					axios.get(`http://localhost:4000/api/tweets?hashtag=${id}`).then((res)=> {
						console.log('res.data', res.data);
						this.setState({
							tweets: res.data
						})
					}).catch((err)=> {
						console.log('err', err);
					})
			}


	//render
	render() {
		return (
			<div id="tweets" className="col-6">
				<Newtweet hashes={this.hashes} selectHashtag={this.selectHashtag} getTweets={this.getTweets} createTweet={this.createTweet} />
				{
						this.state.tweets.map((m)=> {
							return <Tweet hashtags={this.state.hashtags} selectHashtag={this.selectHashtag} tweet={m} key={m._id} hashtag={m.hashtag} />
						})
					}

			</div>
		)
	}
}



export default Tweets;

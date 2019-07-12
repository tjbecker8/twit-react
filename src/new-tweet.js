import React, {Component} from 'react';
import './tweets.css';
import Trendsnewtweet from './trendsNewTweet'
import axios from 'axios'
class Newtweet extends Component {
	//data
	state = {
		text: '',
		hashtags: []
	}
	//functions
	changeText = (e) => {
			this.setState({
				text: e.target.value
			})
		}

		clearTweet = () => {
			this.setState({
				text: ''
			})
			window.location.reload()
		}



//for selecting hastags for new tweet
		componentDidMount() {
				axios.get(`${process.env.REACT_APP_API}/api/hashtag`).then((res)=> {
						// res.data[0].active = true
						this.setState({
							hashtags: res.data
						})
						console.log('this', this.state.hashtags);
						this.props.hashes(this.state.hashtags)
				}).catch((err)=> {
					console.log('err', err);
				})
			}

			// selectHashtag = (id) => {
			// 	let hashtags = this.state.hashtags
			// 	hashtags.map((c)=> c.active = false)
			// 	let hashtag = hashtags.find((c) => c._id === id)
			// 	hashtag.active = true
			// 	this.setState({hashtags})
			// 	// console.log(this.state.channels);
			//
			// 	this.props.getTweets(id)
			// }





	//render
	render() {
		return (
			<div id="new-messages">
				<form onSubmit= {(e) => {
						this.props.createTweet(e, this.state.text);
						this.clearTweet()}
					}>
					<div className="input-group mb-3">
						<div id="hash">
							<h6>Select a hashtag</h6>
							<ul className="list-unstyled">
								{
								this.state.hashtags.map((c) =>{
									return	<Trendsnewtweet hashtag={c} key={c._id} selectHashtag={this.props.selectHashtag} />
								})
							}
							</ul>
						</div>
						<div className="form-group purple-border">
  				<textarea maxLength="140" className="form-control" id="exampleFormControlTextarea4" rows="5" value={this.state.text} onChange={(e) => this.changeText(e)}></textarea>
					</div>

						<div className="input-group-append">
							<button className="btn btn-success" type="submit">Tweet</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}



export default Newtweet;

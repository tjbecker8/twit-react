import React, {Component} from 'react';
import moment from 'moment'
import './tweets.css';
import Like from './like'
class Tweet extends Component {
	//data
	state = {
		tweet: this.props.tweet,
		hashtag: this.props.hashtag,
		hashtags: this.props.hashtags,
	}


	// functions
	componentWillMount() {
			let tweet = this.state.tweet
			tweet.date = moment(tweet.date).format('D MMM YYYY - h:mma')
			this.setState({tweet})
		}

buildClass=()=>{
	 let a = 'hash '
	if (this.props.hashtag.active ) {
		return a += 'active'
	} else {
		return a
	}
}





	//render
	render() {
		return (
			<div className="tweet">
			<div className="card mb-3" >
				<div className="row no-gutters">
					<div className="col-md-4">
						<img src={this.props.tweet.author.image} className="card-img" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{this.props.tweet.author.name}</h5>
							<p className="card-text">{this.props.tweet.body}</p>
							<p className={this.buildClass()} onClick={()=> this.props.selectHashtag(this.props.hashtag._id) } > #{this.props.hashtag.name}</p>
							<p className="card-text"><small className="text-muted">{this.state.tweet.date}</small> <Like id={this.state.tweet._id} like={this.state.tweet.likes} /> </p>
						</div>
					</div>
				</div>
			</div>
		</div>
		)
	}
}



export default Tweet;

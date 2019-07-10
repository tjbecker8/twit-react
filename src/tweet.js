import React, {Component} from 'react';
import moment from 'moment'
import './tweets.css';

class Tweet extends Component {
	//data
	state = {
		tweet: this.props.tweet,
		hashtag: this.props.hashtag
	}


	functions
	componentWillMount() {
			let tweet = this.state.tweet
			tweet.date = moment(tweet.date).format('D MMM YYYY - h:mma')
			this.setState({tweet})
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
						<div id="info" className="card-body">
							<h5 className="card-title">{this.props.tweet.author.name}</h5>
							<p className="card-text">{this.props.tweet.body}</p>
							<p className="card-text hash" onClick={()=> this.props.selectHashtag(this.state.hashtag._id)} className={ this.state.hashtag.active ? 'active' : '' } > #{this.props.hashtag}</p>
							<p className="card-text"><small className="text-muted">{this.state.tweet.date}</small></p>
						</div>
					</div>
				</div>
			</div>
		</div>
		)
	}
}



export default Tweet;

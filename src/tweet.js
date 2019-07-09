import React, {Component} from 'react';
import moment from 'moment'


class Tweet extends Component {
	//data
	state = {
		message: this.props.message
	}
	functions
	componentWillMount() {
			let message = this.state.message
			message.date = moment(message.date).format('D MMM YYYY - h:mma')
			this.setState({message})
		}




	//render
	render() {
		return (
			<div className="tweet">
			<div className="card mb-3" >
				<div className="row no-gutters">
					<div className="col-md-4">
						<img src="..." className="card-img" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{this.props.message.author.name}</h5>
							<p className="card-text">{this.props.message.body}</p>
							<p className="card-text"><small className="text-muted">{this.props.message.date}</small></p>
						</div>
					</div>
				</div>
			</div>
		</div>
		)
	}
}



export default Tweet;

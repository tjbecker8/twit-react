import React, {Component} from 'react';
import './tweets.css';


class Newtweet extends Component {
	//data
	state = {
		text: ''
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
		}






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
							<ul className="list-unstyled">
								<li>#test</li>
								<li>#test</li>
								<li>#test</li>
								<li>#test</li>
								<li>#test</li>
							</ul>
						</div>
						<div className="form-group purple-border">
  				<textarea maxlength="140" className="form-control" id="exampleFormControlTextarea4" rows="5" value={this.state.text} onChange={(e) => this.changeText(e)}></textarea>
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

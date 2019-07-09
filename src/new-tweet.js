import React, {Component} from 'react';



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
						<input type="text" className="form-control" placeholder="New Message" value={this.state.text} onChange={(e) => this.changeText(e)} />
						<div className="input-group-append">
							<button className="btn btn-success" type="submit" >Send</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}



export default Newtweet;

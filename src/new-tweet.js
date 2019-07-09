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

		clearMessage = () => {
			this.setState({
				text: ''
			})
		}






	//render
	render() {
		return (
			<div id="new-messages">
							<form onSubmit= {(e) => {
									this.props.createMessage(e, this.state.text);
									this.clearMessage()}
								}>
								<div className="card mb-3" >
									<div className="form-group">
										
										<textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
										<button className="btn btn-success" type="submit" >Submit</button>
									</div>
								</div>
							</form>
						</div>
		)
	}
}



export default Newtweet;

import React, {Component} from 'react';



class Newtweet extends Component {
	//data
	state = {

	}
	//functions





	//render
	render() {
		return (
			<div className="card mb-3" >
				<div class="form-group">
					<label for="exampleFormControlTextarea1">New Tweet</label>
					<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
				</div>
			</div>
		)
	}
}



export default Newtweet;

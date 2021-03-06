import React, {Component} from 'react';
import './App.css';
import axios from 'axios'


class Signup extends Component {
	//data
	state = {
		name: '',
		email: '',
		password: '',
		image: ''
	}

	//functions
changeName = (e) => {
	this.setState({name: e.target.value})
}

changeEmail = (e) => {
	this.setState({email: e.target.value})
}

changePassword = (e) => {
	this.setState({password: e.target.value})
}

changeImage = (e) => {
	this.setState({image: e.target.value})
}

signup =(e) => {
	e.preventDefault()
	axios.post(`${process.env.REACT_APP_API}/api/signup`, this.state).then((res) => {
		console.log('res',res)
		localStorage.setItem('token', res.data.token)
		this.props.auth()
	}).catch((err)=> {
		console.log('err', err)
	})
}


	//render
	render() {
		return (
			<div className="row">
				<div className="col-sm-4 offset-4">
					<div className="card signup">
						<div className="card-body">
							<form onSubmit={(e)=> this.signup(e)}>
								<div className="form-group">
									<input type="text" className="form-control" placeholder="name" value={this.state.name} onChange={(e)=> this.changeName(e)}/>
								</div>
								<div className="form-group">
									<input type="email" className="form-control" placeholder="email" value={this.state.email} onChange={(e) => this.changeEmail(e)}/>
								</div>
								<div className="form-group">
									<input type="password" className="form-control" placeholder="password" value={this.state.password} onChange={(e) => this.changePassword(e)}/>
								</div>
								<div className="form-group">
									<input type="text" className="form-control" placeholder="image url" value={this.state.image} onChange={(e) => this.changeImage(e)}/>
								</div>
								<button type="submit" className="btn btn-primary">Signup</button>
							</form>
						</div>
					</div>
				</div>
			</div>

		)
	}
}



export default Signup;

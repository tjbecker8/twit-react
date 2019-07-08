import React, {Component} from 'react';



class Topnav extends Component {
	//data
	state = {

	}
	//functions





	//render
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item active">
									<a className="nav-link" href="#"> Home <span className="sr-only">(current)</span></a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">About</a>
								</li>
							</ul>
							<form className="form-inline my-2 my-lg-0">
      					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    					</form>
						</div>
					</nav>
		)
	}
}



export default Topnav;

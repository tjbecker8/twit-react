import React from 'react';
import Header from './header'
import Maincontent from './main-content'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
	return (
		<div id="wrap">
			<Header />
			<Maincontent />
		</div>
	)
}

export default App;

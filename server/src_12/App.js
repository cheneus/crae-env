import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

class App extends Component {
	state = {
		response: ''
	};

	componentWillMount() {
		axios.get('/api/hello')
			.then(res => this.setState({ response: res.express }))
			.catch(err => console.log(err))
	}

	callApi = () => {
		return 
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
					<img src="./img/google-signIn.png" alt="sign-in" onClick={()=> {return axios.get('/auth/google')}}/>
				</header>
				<p className="App-intro">
					{this.state.response}
				</p>
			</div>
		)
	}
}

export default App

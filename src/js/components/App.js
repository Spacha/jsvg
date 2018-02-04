import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Routes from '../Routes'

export default class App extends Component {
	constructor() {
		super()
		this.state = { counter: 0 }
	}

	render() {
		return (
			<Routes>
				<h2>Counter: {this.state.counter}</h2>
				<Link to="/test" />
				<Link to="/another" />
			</Routes>
		)
	}
}

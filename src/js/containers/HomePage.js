import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default class HomePage extends Component {
	constructor() {
		super()
		this.state = { counter: 0 }
	}
	render() {
		return (
			<div>
				<h1>I'm the home page!</h1>
				<h2>Counter: {this.state.counter}</h2>
			</div>
		)
	}
}

import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import TopNav from 'components/TopNav'
import CounterControl from 'components/CounterControl'

export default class HomePage extends Component {
	constructor() {
		super()
		this.state = { counter: 0 }

		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}

	increment(e) {
		this.setState(prevState => {
			return { counter: prevState.counter+1 }
		})
		e.preventDefault();
	}

	decrement(e) {
		this.setState(prevState => {
			return { counter: prevState.counter-1 }
		})
		e.preventDefault();
	}
	render() {
		return (
			<div>
				<TopNav />
				<h1>I'm the home page!</h1>
				<h2>Counter: {this.state.counter}</h2>

				<CounterControl
					counter={this.state.counter}
					increment={this.increment}
					decrement={this.decrement} />
			</div>
		)
	}
}

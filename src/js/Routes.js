import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TestPage from 'containers/TestPage'

export default class Routes extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/test" component={TestPage} />
				</Switch>
			</Router>
		)
	}
}
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from 'containers/HomePage'
import TestPage from 'containers/TestPage'
import AnotherTestPage from 'containers/AnotherTestPage'

export default class Routes extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/test" component={TestPage} />
					<Route exact path="/another" component={AnotherTestPage} />
				</Switch>
			</Router>
		)
	}
}
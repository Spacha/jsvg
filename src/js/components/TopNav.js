import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const TopNav = () => (
	<div>
		<Link to="/">Home</Link> | 
		<Link to="/test">Test</Link> | 
		<Link to="/another">Another</Link>
	</div>
)

export default TopNav
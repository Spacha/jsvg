import React, { Component } from 'react'
import AddPost from 'containers/AddPost'
import PostListContainer from 'containers/PostListContainer'
import Footer from 'components/Footer'

export default class App extends Component {
    render() {
        return (
        	<div>
	            <AddPost />
	            <PostListContainer />
	            <Footer />
	        </div>
        );
    }
}

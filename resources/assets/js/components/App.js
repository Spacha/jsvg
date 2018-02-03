import React, { Component } from 'react'
import AddPost from 'containers/AddPost'
import PostList from 'containers/PostList'
import Footer from 'components/Footer'

export default class App extends Component {
    render() {
        return (
        	<div>
	            <AddPost />
	            <PostList />
	            <Footer />
	        </div>
        );
    }
}

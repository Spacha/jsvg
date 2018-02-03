import React, { Component } from 'react'

const AddPost = () => {
	return (
		<form>
			<div className="form-group">
				<label for="title">Post Title</label>
				<input type="title" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Give your post a title!" />
			</div>
			<div className="form-group">
				<label for="content">Post Content</label>
				<textarea className="form-control" id="content" rows="3"></textarea>
			</div>
			<button type="submit" className="btn btn-primary">Submit</button>
		</form>
	)
}

export default AddPost
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from 'actions'

const AddPost = ({ dispatch }) => {
	let title, content

	return (
		<form onSubmit={e => {
			e.preventDefault()
			if (!title.value.trim() || !content.value.trim()) return
			dispatch(addPost(title.value, content.value))
		}}>
			<div className="form-group">
				<label htmlFor="title">Post Title</label>
				<input
					type="title"
					className="form-control"
					id="title"
					placeholder="Give your post a title!"
					ref={el => { title = el }} />
			</div>
			<div className="form-group">
				<label htmlFor="content">Post Content</label>
				<textarea
					className="form-control"
					id="content"
					rows="3"
					ref={el => { content = el }} ></textarea>
			</div>
			<button type="submit" className="btn btn-primary">Submit</button>
		</form>
	)
}

export default connect()(AddPost)
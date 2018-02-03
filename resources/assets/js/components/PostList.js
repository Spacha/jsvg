import React from 'react'

const PostList = ({ posts }) => (
	<div style={{ background: 'red' }}>
		<ul>
			{posts.map((post, key) =>
				<li key={key}>{post.title} | {post.content}</li>
			)}
		</ul>
	</div>
)

export default PostList

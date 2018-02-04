import React from 'react'

const PostList = ({ posts, deletePost }) => (
	<div style={{ background: 'red' }}>
		<ul>
			{posts.map((post, key) =>
				<li key={key} onClick={ () => deletePost(post.id) }>{post.id} | {post.title} | {post.content}</li>
			)}
		</ul>
	</div>
)

export default PostList

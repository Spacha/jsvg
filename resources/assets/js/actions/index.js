let nextPostId = 0
export const addPost = (title, content) => ({
	type: 'ADD_POST',
	id: nextPostId++,
	title,
	content,
	visible: false
})

export const deletePost = (id) => ({
	type: 'DELETE_POST',
	id
})
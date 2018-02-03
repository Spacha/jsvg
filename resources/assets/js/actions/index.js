let nextPostId = 0
export const addPost = (title, content) => ({
	type: 'ADD_POST',
	id: nextPostId++,
	title,
	content,
	visible: false
})
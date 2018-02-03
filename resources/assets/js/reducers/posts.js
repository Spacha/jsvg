const posts = (state = [], action) => {
	switch(action) {
		case 'ADD_POST':
			return [
				...state,
				{
					type: 'ADD_POST',
					title: action.title,
					content: action.content,
					visible: false
				}
			]
		default:
			return state
	}
}

export default posts

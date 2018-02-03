const posts = (state = [], action) => {
	switch(action.type) {
		case 'ADD_POST':
			console.log(action)
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

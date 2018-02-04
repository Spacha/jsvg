const posts = (state = [], action) => {
	switch(action.type) {
		case 'ADD_POST':
			return [
				...state,
				{
					type: 'ADD_POST',
					id: action.id,
					title: action.title,
					content: action.content,
					visible: false
				}
			]
		case 'DELETE_POST':
			let newState = [];
			for (var i = 0; i < state.length; i++) {
				if (state[i].id !== action.id) newState.push(state[i])
			}
			return newState
		default:
			return state
	}
}

export default posts

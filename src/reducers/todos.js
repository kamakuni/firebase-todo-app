const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO_REQUEST':
            return {...state, notice: 'sending data...'}
        case 'ADD_TODO_SUCCESS':
            return {...state, notice: 'sending data is completed'}
        case 'ADD_TODO_ERROR':
            return {...state, notice: 'adding todo is failed'}
        case 'TOGGLE_TODO':
            return state.map(
                todo => (todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
            );
        default:
            return state;
    }
}

export default todos;
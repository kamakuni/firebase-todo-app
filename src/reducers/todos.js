import {ADD_TODO_REQUEST,ADD_TODO_SUCCESS,ADD_TODO_ERROR,TOGGLE_TODO_REQUEST,TOGGLE_TODO_SUCCESS,TOGGLE_TODO_ERROR, LOGOUT_SUCCESS, NOT_AUTHENTICATED_ON_TODO_ACTION, } from '../actions/'

const getStatusString = (completed) => (
    completed ? 'completed': 'incompleted'
) 

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO_REQUEST:
            return {...state, notice: 'sending data...'}
        case ADD_TODO_SUCCESS:
            return {...state, notice: 'sending data is success'}
        case ADD_TODO_ERROR:
            return {...state, notice: 'adding todo is failed'}
        case TOGGLE_TODO_REQUEST:
            return {...state, notice: `updating state of ${action.text} to ${getStatusString(action.completed)}...`}
        case TOGGLE_TODO_SUCCESS:
            return {...state, notice: `updating state of ${action.text} to ${getStatusString(action.completed)} is success`}
        case TOGGLE_TODO_ERROR:
            return {...state, notice: `updating state of ${action.text} is failed`}
        case NOT_AUTHENTICATED_ON_TODO_ACTION:
            return {...state, notice: 'if you want to add todos, you will log in.'}
        case LOGOUT_SUCCESS:
            return {}
        default:
            return state;
    }
}

export default todos;
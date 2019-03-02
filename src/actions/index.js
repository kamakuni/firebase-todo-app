import { firebaseDb } from '../firebase'
/*
const ref = firebaseDb.ref("todos");

function loadTodos() {
    // https://t-kojima.github.io/2018/08/13/0040-firebase-react-database/
    return dispatch => {
        ref.off()
        ref.on('value',
            (snapshot) => {dispatch(loadTodosSuccess(snapshot))},
            (error) => {dispatch(loadTodosError(error))}
        )
    }
}

function loadTodosSuccess(snapshot) {
    return {
        type: 'TODOS_RECEIVE_DATA',
        data: snapshot.val()
    }
}

function loadTodosError(error) {
    return {
        type: 'TODOS_RECEIVE_ERROR',
        message: error.message
    }
}
*/
let nextTodo = 0
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextTodo++,
    text
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}
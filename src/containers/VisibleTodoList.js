import { connect } from 'react-redux'
import { toggleTodo, VisibilityFilters } from '../actions'
import TodoList from '../components/TodoList'
import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase'

const firebaseQueries = [
    { type: 'value', path: '/todos' }
];

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            throw new Error(`Unknown filter: ${filter}`)
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.firebase.data.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default compose(
    firebaseConnect(firebaseQueries),
    connect(
        mapStateToProps,
        mapDispatchToProps
))(TodoList)
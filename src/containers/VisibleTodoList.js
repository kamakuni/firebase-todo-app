import { connect } from 'react-redux'
import { toggleTodo } from '../actions/todos'
import { VisibilityFilters } from '../actions/visibilityFilter'
import TodoList from '../components/TodoList'
import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase'

const firebaseQueries = [
    { type: 'value', path: '/todos' }
];

const getVisibleTodos = (todos, filter) => {
    if(!todos) return todos
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return Object.keys(todos)
            .filter(key => todos[key].completed)
            .reduce((filtered, key) => {
                    filtered[key] = todos[key];
                    return filtered;
                },
                {}
            )
        case VisibilityFilters.SHOW_ACTIVE:
            return Object.keys(todos)
            .filter(key => !todos[key].completed)
            .reduce((filtered, key) => {
                    filtered[key] = todos[key];
                    return filtered
                },
                {}
            )
        default:
            throw new Error(`Unknown filter: ${filter}`)
    }
}

const firebaseQueries = ({uid}) => (
    [`todos/${uid}`]
)

const mapStateToProps = ({visibilityFilter, firebase: {data: {todos}}}, {uid}) => {
    return {
        todos: getVisibleTodos(todos && todos[uid], visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default compose(
    firebaseConnect(firebaseQueries),
    connect(
        mapStateToProps,
        mapDispatchToProps
))(TodoList)
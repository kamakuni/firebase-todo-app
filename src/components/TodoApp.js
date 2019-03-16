import React from 'react'
import Footer from './Footer'
import Status from './Status'
import AddTodo from '../containers/AddTodo'
import VisibileTodoList from '../containers/VisibleTodoList'

const TodoApp = ({uid, authenticating, authenticated}) => {

    if (authenticating) {
        return <div>logging in</div>
    }
    if (!authenticated) {
        return <div>Login to show your task lint.</div>
    }
    return (
        <div>
            <AddTodo />
            <Status />
            <VisibileTodoList />
            <Footer />
        </div>
    )
}



export default TodoApp
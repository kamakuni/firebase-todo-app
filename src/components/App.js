import React from 'react'
import Footer from './Footer'
import Status from './Status'
import AddTodo from '../containers/AddTodo'
import VisibileTodoList from '../containers/VisibleTodoList'

const App = () => (
    <div>
        <AddTodo />
        <Status />
        <VisibileTodoList />
        <Footer />
    </div>
)

export default App;
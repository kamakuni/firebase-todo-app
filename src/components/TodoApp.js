import React from 'react'
import Footer from './Footer'
import Status from './Status'
import AddTodo from '../containers/AddTodo'
import VisibileTodoList from '../containers/VisibleTodoList'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase';

let TodoApp = ({uid, authenticating, authenticated}) => {

    if (authenticating) {
        return <div>logging in</div>
    }
    if (!authenticated) {
        return <div>Login to show your task lint.</div>
    }
    return (
        <div>
            <AddTodo uid={uid} />
            <Status />
            <VisibileTodoList uid={uid} />
            <Footer />
        </div>
    )
}

TodoApp.propTypes = {
    uid : PropTypes.string,
    authenticating : PropTypes.bool.isRequired,
    authenticated : PropTypes.bool.isRequired
}

const mapStateToProps = ({firebase: {auth, auth: {uid}}}) => ({
    uid,
    authenticating: !isLoaded(auth),
    authenticated: !isEmpty(auth)
})

TodoApp = connect(
    mapStateToProps
)(TodoApp)

export default TodoApp
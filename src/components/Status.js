import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

let Status = ({ notice }) => {
    if (!notice) {
        return <div></div>
    }
    return (
        <div>
            {notice}
        </div>
    )
}

Status.propTypes = {
    notice: PropTypes.string
}

const mapStateToProps = state => {
    return {
        notice: state.todos.notice
    }
}

Status = connect(mapStateToProps)(Status)

export default Status;
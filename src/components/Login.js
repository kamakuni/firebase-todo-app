import React from 'react'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { loginWithGoogle, logout } from '../actions/auth'


const Login = ({ auth, loginWithGoogle, logout }) => {
    if (!isLoaded(auth)) {
        return (<div>Loginig in...</div>)
    }
    if (isEmpty(auth)) {
        return (
            <button onClick="loginWithGoogle">Login with Google account</button>
        )
    }
    return (
        <div>
            {auth.displayName}
            <button onCLick="logout">Logout</button>
        </div>
    )
}

Login.propTypes = {
    auth: PropTypes.object.isRequired,
    loginWithGoogle: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
}

const mapStateToProps = state => (
    { auth: state.firebase.auth }
)

const mapDispatchToProps = dispatch => {
    return {
        loginWithGoogle: () => dispatch(loginWithGoogle()),
        logout: () => dispatch(logout())
    }
}

Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

export default Login;
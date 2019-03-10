import { LOGIN_SUCCESS,  LOGIN_ERROR, LOGOUT_SUCCESS, LOGOUT_ERROR } from './'

const loginSuccess = () => ({
    type: LOGIN_SUCCESS
})

const loginError = (err) => ({
    type: LOGIN_ERROR,
    err
})

export const loginWithGoogle = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()
        firebase.login({ provider: 'google'})
        .then(() => {
            dispatch(loginSuccess())
        }).catch(err => {
            dispatch(loginError(err))
        })
    }
}
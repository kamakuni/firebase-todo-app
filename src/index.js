import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import thunk from 'redux-thunk'
import firebase from 'firebase/app'
import rootReducer from './reducers'
//import firebase from 'firebase'
//import 

import App from './components/App'
import firebaseConfig from './firebase';

firebase.initializeApp(firebaseConfig);
const createStoreWithFirebase = compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase})),
    reactReduxFirebase(firebase, { userProfile: 'users'})
    )(createStore);
const store = createStoreWithFirebase(rootReducer);

render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById("root")
)

module.hot.accept()
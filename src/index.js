import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import { reactReduxFirebase } from 'react-redux-firebase'
import firebase from 'firebase'
import rootReducer from './reducers'
//import firebase from 'firebase'
//import 

import App from './components/App'
import firebaseConfig from './firebase';

firebase.initializeApp(firebaseConfig);
const createStoreWithFirebase = compose(reactReduxFirebase(firebase, {}))(createStore);
const store = createStoreWithFirebase(rootReducer);

render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById("root")
)

module.hot.accept()
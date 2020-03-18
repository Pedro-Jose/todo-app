import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

//middlewares
// Wait an promise request finish to make any action (Not used more in this app) 
import promise from 'redux-promise' 
// Dispatch multiple actions from one action creator returned a array of obj/actions
import mult from 'redux-multi'
// Redux Thunk middleware allows you to write action creators that return a function instead of an action.
import thunk from 'redux-thunk'

import App from './main/app'
import reducers from './main/reducers'

//Redux dev tools Integration
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk, mult, promise)(createStore)(reducers, devTools)

ReactDOM.render( 
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('app'))
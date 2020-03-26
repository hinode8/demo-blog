// Imports
import { compose, combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

// App Imports
import common from '../modules/common/api/state'
import user from '../modules/user/api/state'
import * as product from '../modules/product/api/state'
import * as subscription from '../modules/subscription/api/state'
import * as crate from '../modules/crate/api/state'
import * as blog from '../modules/blog/api/state'

// App Reducer
const appReducer = combineReducers({
  common,
  user,
  ...product,
  ...subscription,
  ...crate,
  ...blog
})

// Root Reducer
export const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined
  }

  return appReducer(state, action)
}

// Load initial state from server side
let initialState
if (typeof window !== 'undefined') {
  initialState = window.__INITIAL_STATE__
  delete window.__INITIAL_STATE__
}

const middlewares = [thunk]
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

// Store
export const store = createStore(
  rootReducer,
  initialState,

  compose(
    applyMiddleware(...middlewares),
  )
)
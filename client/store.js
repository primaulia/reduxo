import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

// import the root reducer
import rootReducer from './reducers/'

import comments from './data/comments'
import posts from './data/posts'

// default state
const defaultState = {
  posts,
  comments
}

const store = createStore(
  rootReducer, 
  defaultState, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export const history = syncHistoryWithStore(browserHistory, store)

export default store
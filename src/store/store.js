import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import { authReducer } from 'reducers/authReducer'
import thunk from 'redux-thunk'

const LIST_REDUCERS = combineReducers({
  auth: authReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const store = createStore(
  LIST_REDUCERS,
  composeEnhancers(applyMiddleware(thunk))
)

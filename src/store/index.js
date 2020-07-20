import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunk from 'redux-thunk'

import menu from './reducers/Menu'

const reducers = combineReducers({
    menu,
})

const store = createStore(reducers, compose(applyMiddleware(thunk)))
export default store
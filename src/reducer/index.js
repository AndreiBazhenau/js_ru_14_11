import { combineReducers } from 'redux'
import articleReducer from './articles'
import counterReducer from './counter'
import filterReducer from './filter'

export default combineReducers({
    articles: articleReducer,
    count: counterReducer,
    filter: filterReducer
})
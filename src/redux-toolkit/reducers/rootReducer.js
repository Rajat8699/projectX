import {combineReducers} from 'redux'
import users from './users'
import testsReducer  from './../test1/testSlice'
const rootReducer = combineReducers({
    users,
    testsReducer
 })

 export default rootReducer;
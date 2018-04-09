import {createStore, applyMiddleware, combineReducers} from 'redux'

import students from '../reducers/StudentReducer'
import courses from '../reducers/CourseReducers'

export const store = createStore(combineReducers(
    {students, courses}), {}, applyMiddleware());
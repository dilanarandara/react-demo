import {createStore, applyMiddleware, combineReducers} from 'redux'
import {routerReducer as router, routerMiddleware} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import students from '../reducers/StudentReducer'
import courses from '../reducers/CourseReducers'

export const history = createHistory();

export const store = createStore(combineReducers({students, courses, router}), {},
 applyMiddleware(routerMiddleware(history)));
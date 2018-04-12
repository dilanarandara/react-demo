import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router'
import '../App.css'
import StudentList from '../components/StudentList'
import CourseList from '../components/CourseList'
import Home from '../components/Home'
import NavBar from '../components/NavBar'
import {withRouter} from 'react-router-dom'

const ConnectedSwitch = connect(state => ({location: state.location}))(Switch)

const AppContainer = () => (
  <Fragment>
    <NavBar/>
    <ConnectedSwitch>
      <Route exact path="/students" component={StudentList}/>
      <Route exact path="/courses" component={CourseList}/>
      <Route exact path="/" component={Home}/>
    </ConnectedSwitch>
  </Fragment>
);

export const App = withRouter(connect(state => ({location: state.location}))(AppContainer));
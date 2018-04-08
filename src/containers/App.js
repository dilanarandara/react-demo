import React, {Component} from 'react'
import '../App.css'
import StudentList from '../components/StudentList'
import CourseList from '../components/CourseList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <StudentList />
        <CourseList />
      </div>
    );
  }
}

export default App;

import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux';

const mapToProps = ({
    courses
}, router) => ({courses, router});

class CourseList extends Component {
    render() {
        return (
            <Fragment>
                <div className="container data-table">
                    <div className="row header">
                        <div className="col-sm-4">Course Name</div>
                        <div className="col-sm-6">Description</div>
                    </div>
                    {this
                        .props
                        .courses
                        .map((course, i) => 
                            <div key={i} className="row">
                                <div className="col-sm-4">{course.name}</div>
                                <div className="col-sm-6">{course.description}</div>
                            </div>
                        )}
                </div>
            </Fragment>
        );
    }
}

export default connect(mapToProps, null)(CourseList);
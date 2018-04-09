import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux';

const mapToProps = ({
    students
}, router) => ({students, router});

class StudentList extends Component {
    render() {
        return (
            <Fragment>
                <div className="container data-table">
                    <div className="row header">
                        <div className="col-sm-4">First Name</div>
                        <div className="col-sm-4">Last Name</div>
                        <div className="col-sm-4">Age</div>
                    </div>
                    {this
                        .props
                        .students
                        .map((student, i) => 
                            <div key={i} className="row">
                                <div className="col-sm-4">{student.first_name}</div>
                                <div className="col-sm-4">{student.last_name}</div>
                                <div className="col-sm-4 number">{student.age}</div>
                            </div>
                        )}
                </div>
            </Fragment>
        );
    }
}

export default connect(mapToProps, null)(StudentList);
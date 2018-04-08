import React, {Component, Fragment} from 'react';

class CourseList extends Component {
    render() {
        return (
            <Fragment>
                <div className="container data-table">
                    <div className="row header">
                        <div className="col-sm-4">Course Name</div>
                        <div className="col-sm-6">Description</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">Statistics</div>
                        <div className="col-sm-6">Statistics Description</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">Human Expertise</div>
                        <div className="col-sm-6">Human Expertise Description</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">Computer Science</div>
                        <div className="col-sm-6">Computer Science Description</div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default CourseList;
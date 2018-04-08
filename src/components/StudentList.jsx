import React, {Component, Fragment} from 'react';

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
                    <div className="row">
                        <div className="col-sm-4">Dilan</div>
                        <div className="col-sm-4">Arandara</div>
                        <div className="col-sm-4 number">30</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">Ed</div>
                        <div className="col-sm-4">Sheeran</div>
                        <div className="col-sm-4 number">27</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">Jason</div>
                        <div className="col-sm-4">Derulo</div>
                        <div className="col-sm-4 number">28</div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default StudentList;
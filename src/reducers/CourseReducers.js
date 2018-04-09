const CourseReducers = (state = [
    {
        name: 'Statistics',
        description: 'Statistics Description'
    }, {
        name: 'Human Expertise',
        description: 'Human Expertise Description'
    }, {
        name: 'Computer Science',
        description: 'Computer Science Description'
    }
], action) => {
    switch (action.type) {}
    return state;
};

export default CourseReducers;
const StudentReducers = (state = [
    {
        first_name: 'Dilan',
        last_name: 'Arandara',
        age: 30
    }, {
        first_name: 'Ed',
        last_name: 'Sheeran',
        age: 27
    }, {
        first_name: 'Jason',
        last_name: 'Derulo',
        age: 28
    }
], action) => {
    switch (action.type) {}
    return state;
};

export default StudentReducers;
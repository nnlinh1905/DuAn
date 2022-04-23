import actionTypes from '../actions/actionTypes';

const initialState = {
    assignments: []
}

const assignmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TEACHER_BY_CLASS_SUCCESS:
            state.assignments = action.data;
            return {
                ...state,
            }
        case actionTypes.TEACHER_BY_CLASS_FAILED:
            state.assignments = [];
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default assignmentReducer;
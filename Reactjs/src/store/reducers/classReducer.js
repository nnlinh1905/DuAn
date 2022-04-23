import actionTypes from '../actions/actionTypes';

const initialState = {
    Class: [],
    Khoi: []
}

const ClassReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_All_CLASS_SUCCESS:
            state.Class = action.data;
            return {
                ...state,
            }
        case actionTypes.FETCH_All_CLASS_FAILED:
            state.Class = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_KHOI_SUCCESS:
            state.Khoi = action.data;
            return {
                ...state,
            }
        case actionTypes.FETCH_KHOI_FAILED:
            state.Khoi = [];
            return {
                ...state,
            }  
        default:
            return state;
    }
}

export default ClassReducer;
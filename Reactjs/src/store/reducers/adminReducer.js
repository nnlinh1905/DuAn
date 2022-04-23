import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGender: false,
    genders: [],
    years: [],
    class: [],
    religions: [],
    semesters: [],
    users: [],
    subject: [],
    titles: [],
    specializes: [],
    teachers: [],
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            let copyState = { ...state };
            copyState.isLoadingGender = true;
            return {
                ...copyState,
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            state.genders = action.data;
            state.isLoadingGender = false;
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_FAILED:
            state.isLoadingGender = false;
            state.genders = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_YEAR_SUCCESS:
            state.years = action.data;
            return {
                ...state,
            }
        case actionTypes.FETCH_YEAR_FAILED:
            state.years = [];
            return {
                ...state,
            }
        
        
        case actionTypes.FETCH_CLASS_SUCCESS:
            state.class = action.data;
            return {
                ...state,
            }
        case actionTypes.FETCH_CLASS_FAILED:
            state.class = [];
            return {
                ...state,
            }
        
        
        case actionTypes.FETCH_RELIGION_SUCCESS:
            state.religions = action.data;
            return {
                ...state,
            }
        case actionTypes.FETCH_RELIGION_FAILED:
            state.religions = [];
            return {
                ...state,
            }
        
        case actionTypes.FETCH_SEMESTER_SUCCESS:
            state.semesters = action.data;
            return {
                ...state,
            }
        case actionTypes.FETCH_SEMESTER_FAILED:
            state.semesters = [];
            return {
                ...state,
            }
        // case actionTypes.CREATE_USER_SUCCESS:
        //     state.semesters = action.data;
        //     return {
        //         ...state,
        //     }
        // case actionTypes.CREATE_USER_FAILED:
        //     state.semesters = [];
        //     return {
        //         ...state,
        //     }
        
        case actionTypes.FETCH_All_USER_SUCCESS:
            state.users = action.users;
            return {
                ...state,
            }
        case actionTypes.FETCH_All_USER_FAILED:
            state.users = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_SUBJECT_SUCCESS:
            state.subject = action.data;
            return {
                ...state,
            }
        case actionTypes.FETCH_SUBJECT_FAILED:
            state.subject = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_TITLE_SUCCESS:
            state.titles = action.data;
            return {
                ...state,
            }
        case actionTypes.FETCH_TITLE_FAILED:
            state.titles = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_SPECIALIZE_SUCCESS:
            state.specializes = action.data;
            return {
                ...state,
            }
        case actionTypes.FETCH_SPECIALIZE_FAILED:
            state.specializes = [];
            return {
                ...state,
            }
        
        default:
            return state;
    }
}

export default adminReducer;
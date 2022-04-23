import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGender: false,
    genders: [],
    years: [],
    class: [],
    religions: [],
    semesters: [],
    teachers: [],
    subject: [],
    byMath: [],
    byVan: [],
    byAnh: [],
    byLy: [],
    byHoa: [],
    byDia: [],
    bySinh: [],
    bySu: [],
    byGDCD: [],
    byGDQP: [],
    byTin: [],
    byCN: [],
    byTD: [],

}

const teacherReducer = (state = initialState, action) => {
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
        
        case actionTypes.FETCH_All_TEACHER_SUCCESS:
            state.teachers = action.users;
            return {
                ...state,
            }
        case actionTypes.FETCH_All_TEACHER_FAILED:
            state.teachers = [];
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
        
        case actionTypes.TEACHER_BY_MATH_SUCCESS:
            state.byMath = action.data;
            return {
                ...state,
            }
        case actionTypes.TEACHER_BY_MATH_FAILED:
            state.byMath = [];
            return {
                ...state,
            }
        case actionTypes.TEACHER_BY_VAN_SUCCESS:
            state.byVan = action.data;
            return {
                ...state,
            }
        case actionTypes.TEACHER_BY_VAN_FAILED:
            state.byVan = [];
            return {
                ...state,
            }
        case actionTypes.TEACHER_BY_ANH_SUCCESS:
            state.byAnh = action.data;
            return {
                ...state,
            }
        case actionTypes.TEACHER_BY_ANH_FAILED:
            state.byAnh = [];
            return {
                ...state,
            }
        
        case actionTypes.TEACHER_BY_LY_SUCCESS:
            state.byLy = action.data;
            return {
                ...state,
            }
        case actionTypes.TEACHER_BY_LY_FAILED:
            state.byLy = [];
            return {
                ...state,
            }
        
        case actionTypes.TEACHER_BY_HOA_SUCCESS:
            state.byHoa = action.data;
            return {
                ...state,
            }
        case actionTypes.TEACHER_BY_HOA_FAILED:
            state.byHoa = [];
            return {
                ...state,
            }
        
        case actionTypes.TEACHER_BY_DIA_SUCCESS:
            state.byDia = action.data;
            return {
                ...state,
            }
        case actionTypes.TEACHER_BY_DIA_FAILED:
            state.byDia = [];
            return {
                ...state,
            }
        
        case actionTypes.TEACHER_BY_SINH_SUCCESS:
            state.bySinh = action.data;
            return {
                ...state,
            }
        case actionTypes.TEACHER_BY_SINH_FAILED:
            state.bySinh = [];
            return {
                ...state,
            }
        
        case actionTypes.TEACHER_BY_SU_SUCCESS:
            state.bySu = action.data;
            return {
                ...state,
            }
        case actionTypes.TEACHER_BY_SU_FAILED:
            state.bySu = [];
            return {
                ...state,
            }
        
        case actionTypes.TEACHER_BY_GDCD_SUCCESS:
            state.byGDCD = action.data;
            return {
                ...state,
            }
        case actionTypes.TEACHER_BY_GDCD_FAILED:
            state.byGDCD = [];
            return {
                ...state,
            }
        
        case actionTypes.TEACHER_BY_GDQP_SUCCESS:
            state.byGDQP = action.data;
            return {
                ...state,
            }
        case actionTypes.TEACHER_BY_GDQP_FAILED:
            state.byGDQP = [];
            return {
                ...state,
            }
        
        case actionTypes.TEACHER_BY_TIN_SUCCESS:
            state.byTin = action.data;
            return {
                ...state,
            }
        case actionTypes.TEACHER_BY_TIN_FAILED:
            state.byTin = [];
            return {
                ...state,
            }
        
        case actionTypes.TEACHER_BY_CN_SUCCESS:
            state.byCN = action.data;
            return {
                ...state,
            }
        case actionTypes.TEACHER_BY_CN_FAILED:
            state.byCN = [];
            return {
                ...state,
            }
        
        case actionTypes.TEACHER_BY_TD_SUCCESS:
            state.byTD = action.data;
            return {
                ...state,
            }
        case actionTypes.TEACHER_BY_TD_FAILED:
            state.byTD = [];
            return {
                ...state,
            }
        
        default:
            return state;
    }
}

export default teacherReducer;
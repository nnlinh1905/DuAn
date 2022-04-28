const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',
    CHANGE_LANGUAGES: 'CHANGE_LANGUAGES',

    //user
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',
    
    //admin

    FETCH_GENDER_START: "FETCH_GENDER_START",
    FETCH_GENDER_SUCCESS: "FETCH_GENDER_SUCCESS",
    FETCH_GENDER_FAILED: "FETCH_GENDER_FAILED",

    FETCH_YEAR_SUCCESS: "FETCH_YEAR_SUCCESS",
    FETCH_YEAR_FAILED: "FETCH_YEAR_FAILED",

    FETCH_CLASS_SUCCESS: "FETCH_CLASS_SUCCESS",
    FETCH_CLASS_FAILED: "FETCH_CLASS_FAILED",

    FETCH_SUBJECT_SUCCESS: "FETCH_SUBJECT_SUCCESS",
    FETCH_SUBJECT_FAILED: "FETCH_SUBJECT_FAILED",

    FETCH_RELIGION_SUCCESS: "FETCH_RELIGION_SUCCESS",
    FETCH_RELIGION_FAILED: "FETCH_RELIGION_FAILED",

    FETCH_SEMESTER_SUCCESS: "FETCH_SEMESTER_SUCCESS",
    FETCH_SEMESTER_FAILED: "FETCH_SEMESTER_FAILED",

    CREATE_USER_SUCCESS: "CREATE_USER_SUCCESS",
    CREATE_USER_FAILED: "CREATE_USER_FAILED",

    EDIT_USER_SUCCESS: "EDIT_USER_SUCCESS",
    EDIT_USER_FAILED: "EDIT_USER_FAILED",

    FETCH_All_USER_SUCCESS: "FETCH_All_USER_SUCCESS",
    FETCH_All_USER_FAILED: "FETCH_All_USER_FAILED",

    DELETE_USER_SUCCESS: "DELETE_USER_SUCCESS",
    DELETE_USER_FAILED: "DELETE_USER_FAILED",

    FETCH_SUBJECT_SUCCESS: "FETCH_SUBJECT_SUCCESS",
    FETCH_SUBJECT_FAILED: "FETCH_SUBJECT_FAILED",


    //Giao Vien.

    FETCH_TITLE_SUCCESS: "FETCH_TITLE_SUCCESS",
    FETCH_TITLE_FAILED: "FETCH_TITLE_FAILED",

    FETCH_SPECIALIZE_SUCCESS: "FETCH_SPECIALIZE_SUCCESS",
    FETCH_SPECIALIZE_FAILED: "FETCH_SPECIALIZE_FAILED",

    FETCH_All_TEACHER_SUCCESS: "FETCH_All_TEACHER_SUCCESS",
    FETCH_All_TEACHER_FAILED: "FETCH_All_TEACHER_FAILED",

    CREATE_TEACHER_SUCCESS: "CREATE_TEACHER_SUCCESS",
    CREATE_TEACHER_FAILED: "CREATE_TEACHER_FAILED",

    DELETE_TEACHER_SUCCESS: "DELETE_TEACHER_SUCCESS",
    DELETE_TEACHER_FAILED: "DELETE_TEACHER_FAILED",

    EDIT_TEACHER_SUCCESS: "EDIT_TEACHER_SUCCESS",
    EDIT_TEACHER_FAILED: "EDIT_TEACHER_FAILED",

    SAVE_INFOR_TEACHER_SUCCESS: "SAVE_INFOR_TEACHER_SUCCESS",
    SAVE_INFOR_TEACHER_FAILED: "SAVE_INFOR_TEACHER_FAILED",


    //tin tức
    FETCH_All_NEWS_SUCCESS: "FETCH_All_NEWS_SUCCESS",
    FETCH_All_NEWS_FAILED: "FETCH_All_NEWS_FAILED",

    SAVE_NEWS_SUCCESS: "SAVE_NEWS_SUCCESS",
    SAVE_NEWS_FAILED: "SAVE_NEWS_FAILED",

    DELETE_NEWS_SUCCESS: "DELETE_NEWS_SUCCESS",
    DELETE_NEWS_FAILED: "DELETE_NEWS_FAILED",

    EDIT_NEWS_SUCCESS: "EDIT_NEWS_SUCCESS",
    EDIT_NEWS_FAILED: "EDIT_NEWS_FAILED",

    //Lớp
    FETCH_All_CLASS_SUCCESS: "FETCH_All_CLASS_SUCCESS",
    FETCH_All_CLASS_FAILED: "FETCH_All_CLASS_FAILED",

    SAVE_CLASS_SUCCESS: "SAVE_CLASS_SUCCESS",
    SAVE_CLASS_FAILED: "SAVE_CLASS_FAILED",

    DELETE_CLASS_SUCCESS: "DELETE_CLASS_SUCCESS",
    DELETE_CLASS_FAILED: "DELETE_CLASS_FAILED",

    EDIT_CLASS_SUCCESS: "EDIT_CLASS_SUCCESS",
    EDIT_CLASS_FAILED: "EDIT_CLASS_FAILED",

    FETCH_KHOI_SUCCESS: "FETCH_KHOI_SUCCESS",
    FETCH_KHOI_FAILED: "FETCH_KHOI_FAILED",

    TEACHER_BY_MATH_SUCCESS: "TEACHER_BY_MATH_SUCCESS",
    TEACHER_BY_MATH_FAILED: "TEACHER_BY_MATH_FAILED",

    TEACHER_BY_VAN_SUCCESS: "TEACHER_BY_VAN_SUCCESS",
    TEACHER_BY_VAN_FAILED: "TEACHER_BY_VAN_FAILED",

    TEACHER_BY_ANH_SUCCESS: "TEACHER_BY_ANH_SUCCESS",
    TEACHER_BY_ANH_FAILED: "TEACHER_BY_ANH_FAILED",

    TEACHER_BY_LY_SUCCESS: "TEACHER_BY_LY_SUCCESS",
    TEACHER_BY_LY_FAILED: "TEACHER_BY_LY_FAILED",

    TEACHER_BY_DIA_SUCCESS: "TEACHER_BY_DIA_SUCCESS",
    TEACHER_BY_DIA_FAILED: "TEACHER_BY_DIA_FAILED",

    TEACHER_BY_SINH_SUCCESS: "TEACHER_BY_SINH_SUCCESS",
    TEACHER_BY_SINH_FAILED: "TEACHER_BY_SINH_FAILED",

    TEACHER_BY_HOA_SUCCESS: "TEACHER_BY_HOA_SUCCESS",
    TEACHER_BY_HOA_FAILED: "TEACHER_BY_HOA_FAILED",

    TEACHER_BY_GDCD_SUCCESS: "TEACHER_BY_GDCD_SUCCESS",
    TEACHER_BY_GDCD_FAILED: "TEACHER_BY_GDCD_FAILED",

    TEACHER_BY_CN_SUCCESS: "TEACHER_BY_CN_SUCCESS",
    TEACHER_BY_CN_FAILED: "TEACHER_BY_CN_FAILED",

    TEACHER_BY_TIN_SUCCESS: "TEACHER_BY_TIN_SUCCESS",
    TEACHER_BY_TIN_FAILED: "TEACHER_BY_TIN_FAILED",

    TEACHER_BY_GDQP_SUCCESS: "TEACHER_BY_GDQP_SUCCESS",
    TEACHER_BY_GDQP_FAILED: "TEACHER_BY_GDQP_FAILED",

    TEACHER_BY_SU_SUCCESS: "TEACHER_BY_SU_SUCCESS",
    TEACHER_BY_SU_FAILED: "TEACHER_BY_SU_FAILED",

    TEACHER_BY_TD_SUCCESS: "TEACHER_BY_TD_SUCCESS",
    TEACHER_BY_TD_FAILED: "TEACHER_BY_TD_FAILED",

    SAVE_ASSIGNMENT_SUCCESS: "SAVE_ASSIGNMENT_SUCCESS",
    SAVE_ASSIGNMENT_FAILED: "SAVE_ASSIGNMENT_FAILED",

    TEACHER_BY_CLASS_SUCCESS: "TEACHER_BY_CLASS_SUCCESS",
    TEACHER_BY_CLASS_FAILED: "TEACHER_BY_CLASS_FAILED",
})

export default actionTypes;
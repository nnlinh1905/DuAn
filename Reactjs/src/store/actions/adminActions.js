import actionTypes from './actionTypes';
import {getAllTeachers,getHocSinh,getSubject,getAllCodeService, createNewUserService,getAllUsers,deleteUserService,editUserService } from '../../services/userService';
import { toast } from "react-toastify"

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START,
// })

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START });
            let res = await getAllCodeService("GENDER");
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data));
            } else {
                dispatch(fetchGenderFailed());
            }
        } catch (e) {
            dispatch(fetchGenderFailed())
            console.log('fetchGenderStart error',e);
        }
    }
}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData,
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED,
})

export const fetchYearStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("YEAR");
            if (res && res.errCode === 0) {
                dispatch(fetchYearSuccess(res.data));
            } else {
                dispatch(fetchYearFailed());
            }
        } catch (e) {
            dispatch(fetchYearFailed())
            console.log('fetchYearFailed error',e);
        }
    }
}

export const fetchYearSuccess = (YearData) => ({
    type: actionTypes.FETCH_YEAR_SUCCESS,
    data: YearData,
})

export const fetchYearFailed = () => ({
    type: actionTypes.FETCH_YEAR_FAILED,
})

export const fetchSubjectStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("MONHOC");
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_SUBJECT_SUCCESS,
                    data: res.data,
                });
            } else {
                dispatch({
                    type: actionTypes.FETCH_SUBJECT_FAILED
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.FETCH_SUBJECT_FAILED
            });
            console.log('fetchSubjectFailed error',e);
        }
    }
}

export const fetchClassStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("CLASS");
            if (res && res.errCode === 0) {
                dispatch(fetchClassSuccess(res.data));
            } else {
                dispatch(fetchClassFailed());
            }
        } catch (e) {
            dispatch(fetchClassFailed())
            console.log('fetchClassFailed error',e);
        }
    }
}

export const fetchClassSuccess = (genderData) => ({
    type: actionTypes.FETCH_CLASS_SUCCESS,
    data: genderData,
})

export const fetchClassFailed = () => ({
    type: actionTypes.FETCH_CLASS_FAILED,
})

export const fetchReligionStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("RELIGION");
            if (res && res.errCode === 0) {
                dispatch(fetchReligionSuccess(res.data));
            } else {
                dispatch(fetchReligionFailed());
            }
        } catch (e) {
            dispatch(fetchReligionFailed())
            console.log('fetchReligionFailed error',e);
        }
    }
}

export const fetchReligionSuccess = (genderData) => ({
    type: actionTypes.FETCH_RELIGION_SUCCESS,
    data: genderData,
})

export const fetchReligionFailed = () => ({
    type: actionTypes.FETCH_RELIGION_FAILED,
})

export const fetchSemesterStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("SEMESTER");
            if (res && res.errCode === 0) {
                dispatch(fetchSemesterSuccess(res.data));
            } else {
                dispatch(fetchSemesterFailed());
            }
        } catch (e) {
            dispatch(fetchSemesterFailed())
            console.log('fetchSemesterFailed error',e);
        }
    }
}

export const fetchSemesterSuccess = (genderData) => ({
    type: actionTypes.FETCH_SEMESTER_SUCCESS,
    data: genderData,
})

export const fetchSemesterFailed = () => ({
    type: actionTypes.FETCH_SEMESTER_FAILED,
})


//SAVE

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            if (res && res.errCode === 0) {
                toast.success("Create a new user success");
                dispatch(saveUserSuccess());
                dispatch(fetchAllUserStart());
            } else {
                dispatch(saveUserFailed());
            }
        } catch (e) {
            dispatch(saveUserFailed())
            console.log('saveUserFailed error',e);
        }
    }
}

export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS,
})

export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED,
})



export const fetchAllUserStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetchAllUserSuccess(res.users.reverse()));
            } else {
                toast.error("Fetch All users error");
                dispatch(fetchAllUserFailed());
            }
        } catch (e) {
            toast.error("Fetch All users error");
            dispatch(fetchAllUserFailed())
            console.log('fetchAllUserFailed error',e);
        }
    }
}

export const fetchAllUserSuccess = (users) => ({
    type: actionTypes.FETCH_All_USER_SUCCESS,
    users: users,
})

export const fetchAllUserFailed = () => ({
    type: actionTypes.FETCH_All_USER_FAILED,
})

export const deleteUserStart = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(data);
            if (res && res.errCode === 0) {
                toast.success("Delete user success");
                dispatch(deleteUserSuccess());
                dispatch(fetchAllUserStart());
            } else {
                toast.error("Delete user error");
                dispatch(deleteUserFailed());
            }
        } catch (e) {
            toast.error("Delete user error");
            dispatch(deleteUserFailed())
            console.log('deleteUserFailed error',e);
        }
    }
}

export const deleteUserSuccess = (users) => ({
    type: actionTypes.DELETE_USER_SUCCESS,
    users: users,
})

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED,
})

export const editUserStart = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data);
            console.log(res)
            if (res && res.errCode === 0) {
                toast.success("Update user success");
                dispatch(editUserSuccess());
                dispatch(fetchAllUserStart());
            } else {
                toast.error("Update user error1");
                dispatch(editUserFailed());
            }
        } catch (e) {
            toast.error("Update user error");
            dispatch(editUserFailed())
            console.log('editUserFailed error',e);
        }
    }
}

export const editUserSuccess = (users) => ({
    type: actionTypes.EDIT_USER_SUCCESS,
    users: users,
})

export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED,
})

export const fetchSubject = () => {
    return async (dispatch, getState) => {
        try {
            let subject = await getSubject();
            if (subject && subject.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_SUBJECT_SUCCESS,
                    data: subject.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_SUBJECT_FAILED,
                })
            }
        } catch (e) {
            console.log('FETCH_SUBJECT_FAILED',e);
            dispatch({
                type: actionTypes.FETCH_SUBJECT_FAILED,
            })
        }
    }
}

export const fetchTitleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("TITLE");
            if (res && res.errCode === 0) {
                dispatch(fetchTitleSuccess(res.data));
            } else {
                dispatch(fetchTitleFailed());
            }
        } catch (e) {
            dispatch(fetchTitleFailed())
            console.log('fetchTitleFailed error',e);
        }
    }
}

export const fetchTitleSuccess = (titleData) => ({
    type: actionTypes.FETCH_TITLE_SUCCESS,
    data: titleData,
})

export const fetchTitleFailed = () => ({
    type: actionTypes.FETCH_TITLE_FAILED,
})

export const fetchSpecializeStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("MONHOC");
            if (res && res.errCode === 0) {
                dispatch(fetchSpecializeSuccess(res.data));
            } else {
                dispatch(fetchSpecializeFailed());
            }
        } catch (e) {
            dispatch(fetchSpecializeFailed())
            console.log('fetchSpecializeFailed error',e);
        }
    }
}

export const fetchSpecializeSuccess = (SpecializeData) => ({
    type: actionTypes.FETCH_SPECIALIZE_SUCCESS,
    data: SpecializeData,
})

export const fetchSpecializeFailed = () => ({
    type: actionTypes.FETCH_SPECIALIZE_FAILED,
})


/// giáo viên

// export const fetchAllTeacherStart = () => {
//     return async (dispatch, getState) => {
//         try {
//             let res = await getAllTeachers("ALL");
//             if (res && res.errCode === 0) {
//                 dispatch(fetchAllTeacherSuccess(res.users.reverse()));
//             } else {
//                 toast.error("Fetch All teachers error");
//                 dispatch(fetchAllTeacherFailed());
//             }
//         } catch (e) {
//             toast.error("Fetch All teachers error");
//             dispatch(fetchAllTeacherFailed())
//             console.log('fetchAllTeacherFailed error',e);
//         }
//     }
// }

// export const fetchAllTeacherSuccess = (users) => ({
//     type: actionTypes.FETCH_All_TEACHER_SUCCESS,
//     users: users,
// })

// export const fetchAllTeacherFailed = () => ({
//     type: actionTypes.FETCH_All_TEACHER_FAILED,
// })
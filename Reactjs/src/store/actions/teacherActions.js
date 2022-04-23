import actionTypes from './actionTypes';
import {getTeacherBySubject,inforTeacher,editTeacherService,deleteTeacherService,createNewTeacherService,getAllTeachers,getHocSinh,getSubject,getAllCodeService, createNewUserService,deleteUserService,editUserService } from '../../services/userService';
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

export const fetchYearSuccess = (genderData) => ({
    type: actionTypes.FETCH_YEAR_SUCCESS,
    data: genderData,
})

export const fetchYearFailed = () => ({
    type: actionTypes.FETCH_YEAR_FAILED,
})

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

export const createNewTeacher = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewTeacherService(data);
            if (res && res.errCode === 0) {
                toast.success("Create a new teacher success");
                dispatch(saveTeacherSuccess());
                dispatch(fetchAllTeacherStart());
            } else {
                dispatch(saveTeacherFailed());
            }
        } catch (e) {
            dispatch(saveTeacherFailed())
            console.log('saveUserFailed error',e);
        }
    }
}

export const saveTeacherSuccess = () => ({
    type: actionTypes.CREATE_TEACHER_SUCCESS,
})

export const saveTeacherFailed = () => ({
    type: actionTypes.CREATE_TEACHER_FAILED,
})



export const fetchAllTeacherStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllTeachers("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetchAllTeacherSuccess(res.users.reverse()));
            } else {
                toast.error("Fetch All teachers error");
                dispatch(fetchAllTeacherFailed());
            }
        } catch (e) {
            toast.error("Fetch All teachers error");
            dispatch(fetchAllTeacherFailed())
            console.log('fetchAllTeacherFailed error',e);
        }
    }
}

export const fetchAllTeacherSuccess = (users) => ({
    type: actionTypes.FETCH_All_TEACHER_SUCCESS,
    users: users,
})

export const fetchAllTeacherFailed = () => ({
    type: actionTypes.FETCH_All_TEACHER_FAILED,
})

export const deleteTeacherStart = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteTeacherService(data);
            if (res && res.errCode === 0) {
                toast.success("Delete user success");
                dispatch(deleteTeacherSuccess());
                dispatch(fetchAllTeacherStart());
            } else {
                toast.error("Delete teacher error");
                dispatch(deleteTeacherFailed());
            }
        } catch (e) {
            toast.error("Delete teacher error");
            dispatch(deleteTeacherFailed())
            console.log('deleteTeacherFailed error',e);
        }
    }
}

export const deleteTeacherSuccess = (users) => ({
    type: actionTypes.DELETE_TEACHER_SUCCESS,
    users: users,
})

export const deleteTeacherFailed = () => ({
    type: actionTypes.DELETE_TEACHER_FAILED,
})

export const editTeacherStart = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editTeacherService(data);
            if (res && res.errCode === 0) {
                toast.success("Update teacher success");
                dispatch(editTeacherSuccess());
                dispatch(fetchAllTeacherStart());
            } else {
                toast.error("Update teacher error1");
                dispatch(editTeacherFailed());
            }
        } catch (e) {
            toast.error("Update teacher error");
            dispatch(editTeacherFailed())
            console.log('editTeacherFailed error',e);
        }
    }
}

export const editTeacherSuccess = (users) => ({
    type: actionTypes.EDIT_TEACHER_SUCCESS,
    users: users,
})

export const editTeacherFailed = () => ({
    type: actionTypes.EDIT_TEACHER_FAILED,
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

export const saveInforTeacherStart = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await inforTeacher(data);
            if (res && res.errCode === 0) {
                toast.success("Save infor teacher success");
                dispatch({
                    type: actionTypes.SAVE_INFOR_TEACHER_SUCCESS,
                });
            } else {
                toast.error("Save infor teacher error");
                dispatch({
                    type: actionTypes.SAVE_INFOR_TEACHER_FAILED
                })
            }
        } catch (e) {
            toast.error("Save infor teacher error");
            console.log("SAVE_INFOR_TEACHER_FAILED", e);
            dispatch({
                type: actionTypes.SAVE_INFOR_TEACHER_FAILED
            })
        }
    }
}

export const teacherByMath = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTeacherBySubject("Toan");
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.TEACHER_BY_MATH_SUCCESS,
                    data: res.res,
                });
            } else {
                dispatch({
                    type: actionTypes.TEACHER_BY_MATH_FAILED
                })
            }
        } catch (e) {
            console.log("TEACHER_BY_MATH_FAILED", e);
            dispatch({
                type: actionTypes.TEACHER_BY_MATH_FAILED
            })
        }
    }
}

export const teacherByVan = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTeacherBySubject("VAN");
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.TEACHER_BY_VAN_SUCCESS,
                    data: res.res,
                });
            } else {
                dispatch({
                    type: actionTypes.TEACHER_BY_VAN_FAILED
                })
            }
        } catch (e) {
            console.log("TEACHER_BY_VAN_FAILED", e);
            dispatch({
                type: actionTypes.TEACHER_BY_VAN_FAILED
            })
        }
    }
}

export const teacherByAnh = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTeacherBySubject("ANH");
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.TEACHER_BY_ANH_SUCCESS,
                    data: res.res,
                });
            } else {
                dispatch({
                    type: actionTypes.TEACHER_BY_ANH_FAILED
                })
            }
        } catch (e) {
            console.log("TEACHER_BY_ANH_FAILED", e);
            dispatch({
                type: actionTypes.TEACHER_BY_ANH_FAILED
            })
        }
    }
}

export const teacherByLy = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTeacherBySubject("LY");
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.TEACHER_BY_LY_SUCCESS,
                    data: res.res,
                });
            } else {
                dispatch({
                    type: actionTypes.TEACHER_BY_LY_FAILED
                })
            }
        } catch (e) {
            console.log("TEACHER_BY_LY_FAILED", e);
            dispatch({
                type: actionTypes.TEACHER_BY_LY_FAILED
            })
        }
    }
}

export const teacherByHoa = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTeacherBySubject("HOA");
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.TEACHER_BY_HOA_SUCCESS,
                    data: res.res,
                });
            } else {
                dispatch({
                    type: actionTypes.TEACHER_BY_HOA_FAILED
                })
            }
        } catch (e) {
            console.log("TEACHER_BY_HOA_FAILED", e);
            dispatch({
                type: actionTypes.TEACHER_BY_HOA_FAILED
            })
        }
    }
}

export const teacherBySinh = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTeacherBySubject("Sinh");
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.TEACHER_BY_SINH_SUCCESS,
                    data: res.res,
                });
            } else {
                dispatch({
                    type: actionTypes.TEACHER_BY_SINH_FAILED
                })
            }
        } catch (e) {
            console.log("TEACHER_BY_SINH_FAILED", e);
            dispatch({
                type: actionTypes.TEACHER_BY_SINH_FAILED
            })
        }
    }
}

export const teacherByDia = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTeacherBySubject("DIA");
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.TEACHER_BY_DIA_SUCCESS,
                    data: res.res,
                });
            } else {
                dispatch({
                    type: actionTypes.TEACHER_BY_DIA_FAILED
                })
            }
        } catch (e) {
            console.log("TEACHER_BY_DIA_FAILED", e);
            dispatch({
                type: actionTypes.TEACHER_BY_DIA_FAILED
            })
        }
    }
}

export const teacherBySu = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTeacherBySubject("SU");
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.TEACHER_BY_SU_SUCCESS,
                    data: res.res,
                });
            } else {
                dispatch({
                    type: actionTypes.TEACHER_BY_SU_FAILED
                })
            }
        } catch (e) {
            console.log("TEACHER_BY_SU_FAILED", e);
            dispatch({
                type: actionTypes.TEACHER_BY_SU_FAILED
            })
        }
    }
}

export const teacherByGDCD = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTeacherBySubject("GDCD");
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.TEACHER_BY_GDCD_SUCCESS,
                    data: res.res,
                });
            } else {
                dispatch({
                    type: actionTypes.TEACHER_BY_GDCD_FAILED
                })
            }
        } catch (e) {
            console.log("TEACHER_BY_GDCD_FAILED", e);
            dispatch({
                type: actionTypes.TEACHER_BY_GDCD_FAILED
            })
        }
    }
}

export const teacherByTDuc = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTeacherBySubject("TDUC");
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.TEACHER_BY_TD_SUCCESS,
                    data: res.res,
                });
            } else {
                dispatch({
                    type: actionTypes.TEACHER_BY_TD_FAILED
                })
            }
        } catch (e) {
            console.log("TEACHER_BY_TD_FAILED", e);
            dispatch({
                type: actionTypes.TEACHER_BY_TD_FAILED
            })
        }
    }
}

export const teacherByCN = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTeacherBySubject("CONG");
            console.log('res', res)
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.TEACHER_BY_CN_SUCCESS,
                    data: res.res,
                });
            } else {
                dispatch({
                    type: actionTypes.TEACHER_BY_CN_FAILED
                })
            }
        } catch (e) {
            console.log("TEACHER_BY_CN_FAILED", e);
            dispatch({
                type: actionTypes.TEACHER_BY_CN_FAILED
            })
        }
    }
}

export const teacherByTin = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTeacherBySubject("TIN");
            console.log('res', res)
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.TEACHER_BY_TIN_SUCCESS,
                    data: res.res,
                });
            } else {
                dispatch({
                    type: actionTypes.TEACHER_BY_TIN_FAILED
                })
            }
        } catch (e) {
            console.log("TEACHER_BY_TIN_FAILED", e);
            dispatch({
                type: actionTypes.TEACHER_BY_TIN_FAILED
            })
        }
    }
}

export const teacherByGDQP = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTeacherBySubject("GDQP");
            console.log('res', res)
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.TEACHER_BY_GDQP_SUCCESS,
                    data: res.res,
                });
            } else {
                dispatch({
                    type: actionTypes.TEACHER_BY_GDQP_FAILED
                })
            }
        } catch (e) {
            console.log("TEACHER_BY_GDQP_FAILED", e);
            dispatch({
                type: actionTypes.TEACHER_BY_GDQP_FAILED
            })
        }
    }
}
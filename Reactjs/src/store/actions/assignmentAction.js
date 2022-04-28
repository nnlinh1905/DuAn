import actionTypes from './actionTypes';
import { teacherByClass,saveAssignment } from '../../services/userService';
import { toast } from "react-toastify"

export const saveAssignmentStart = (data) => {
    return async (dispatch, getState) => {
        try {
            console.log(data)
            let res = await saveAssignment(data);
            if (res && res.errCode === 0) {
                // toast.success("Save Assignment success");
                // dispatch(getAllClass())
                dispatch({
                    type: actionTypes.SAVE_ASSIGNMENT_SUCCESS,
                });
            } else {
                // toast.error("Save Assignment error");
                dispatch({
                    type: actionTypes.SAVE_ASSIGNMENT_FAILED
                })
            }
        } catch (e) {
            // toast.error("Save Assignment error");
            console.log("SAVE_Assignment_FAILED", e);
            dispatch({
                type: actionTypes.SAVE_ASSIGNMENT_FAILED
            })
        }
    }
}

export const teachersByLop = (id) => {
    return async (dispatch, getState) => {
        try {
            let res = await teacherByClass(id);
            if (res && res.errCode === 0) {
                // toast.success("Save Assignment success");
                // dispatch(getAllClass())
                dispatch({
                    type: actionTypes.TEACHER_BY_CLASS_SUCCESS,
                    data: res.teachers
                });
            } else {
                // toast.error("Save Assignment error");
                dispatch({
                    type: actionTypes.TEACHER_BY_CLASS_FAILED
                })
            }
        } catch (e) {
            // toast.error("Save Assignment error");
            console.log("SAVE_Assignment_FAILED", e);
            dispatch({
                type: actionTypes.TEACHER_BY_CLASS_FAILED
            })
        }
    }
}
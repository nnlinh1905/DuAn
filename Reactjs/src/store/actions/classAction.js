import actionTypes from './actionTypes';
import { deleteClass,allClass,saveClass,editClass,getAllCodeService } from '../../services/userService';
import { toast } from "react-toastify"

export const getAllClass = () => {
    return async (dispatch, getState) => {
        try {
            let res = await allClass("ALL");
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_All_CLASS_SUCCESS,
                    data: res.DataClass,
                });
            } else {
                dispatch({
                    type: actionTypes.FETCH_All_CLASS_FAILED
                })
            }
        } catch (e) {
            console.log("FETCH_All_CLASS_FAILED", e);
            dispatch({
                type: actionTypes.FETCH_All_CLASS_FAILED
            })
        }
    }
}

export const saveClassStart = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await saveClass(data);
            if (res && res.errCode === 0) {
                
                toast.success("Save class success");
                dispatch(getAllClass())
                dispatch({
                    type: actionTypes.SAVE_CLASS_SUCCESS,
                });
            } else {
                toast.error("Save class error");
                dispatch({
                    type: actionTypes.SAVE_CLASS_FAILED
                })
            }
        } catch (e) {
            toast.error("Save class error");
            console.log("SAVE_class_FAILED", e);
            dispatch({
                type: actionTypes.SAVE_CLASS_FAILED
            })
        }
    }
}

export const DeleteClassStart = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteClass(data);
            if (res && res.errCode === 0) {
                toast.success("Delete Class success");
                dispatch(getAllClass())
                dispatch({
                    type: actionTypes.DELETE_CLASS_SUCCESS,
                });
            } else {
                toast.error("Delete Class error");
                dispatch({
                    type: actionTypes.DELETE_CLASS_FAILED
                })
            }
        } catch (e) {
            toast.error("Delete Class error");
            console.log("Delete Class FAILED", e);
            dispatch({
                type: actionTypes.DELETE_CLASS_FAILED
            })
        }
    }
}

export const editClassStart = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editClass(data);
            if (res && res.errCode === 0) {
                toast.success("Update Class success");
                dispatch(getAllClass())
                dispatch({
                    type: actionTypes.EDIT_CLASS_SUCCESS,
                })
            } else {
                toast.error("Update Class error1");
                dispatch({
                    type: actionTypes.EDIT_CLASS_FAILED,
                });
            }
        } catch (e) {
            toast.error("Update Class error");
            dispatch({type: actionTypes.EDIT_CLASS_FAILED,})
            console.log('editClassFailed error',e);
        }
    }
}

export const fetchKhoiStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("KHOI");
            if (res && res.errCode === 0) {
                dispatch(fetchKhoiSuccess(res.data));
            } else {
                dispatch(fetchKhoiFailed());
            }
        } catch (e) {
            dispatch(fetchKhoiFailed())
            console.log('fetchSpecializeFailed error',e);
        }
    }
}

export const fetchKhoiSuccess = (Khoi) => ({
    type: actionTypes.FETCH_KHOI_SUCCESS,
    data: Khoi,
})

export const fetchKhoiFailed = () => ({
    type: actionTypes.FETCH_KHOI_FAILED,
})
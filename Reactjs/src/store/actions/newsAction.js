import actionTypes from './actionTypes';
import { allNews,saveNews,deleteNews,editNews } from '../../services/userService';
import { toast } from "react-toastify"

export const getAllNews = () => {
    return async (dispatch, getState) => {
        try {
            let res = await allNews("ALL");
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_All_NEWS_SUCCESS,
                    data: res.news.reverse(),
                });
            } else {
                dispatch({
                    type: actionTypes.FETCH_All_NEWS_FAILED
                })
            }
        } catch (e) {
            console.log("FETCH_All_NEWS_FAILED", e);
            dispatch({
                type: actionTypes.FETCH_All_NEWS_FAILED
            })
        }
    }
}

export const saveNewsStart = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await saveNews(data);
            if (res && res.errCode === 0) {
                
                toast.success("Save news success");
                dispatch(getAllNews())
                dispatch({
                    
                    type: actionTypes.SAVE_NEWS_SUCCESS,
                });
            } else {
                toast.error("Save news error");
                dispatch({
                    type: actionTypes.SAVE_NEWS_FAILED
                })
            }
        } catch (e) {
            toast.error("Save news error");
            console.log("SAVE_news_FAILED", e);
            dispatch({
                type: actionTypes.SAVE_NEWS_FAILED
            })
        }
    }
}

export const DeleteNewStart = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteNews(data);
            if (res && res.errCode === 0) {
                toast.success("Delete news success");
                dispatch(getAllNews())
                dispatch({
                    type: actionTypes.DELETE_NEWS_SUCCESS,
                });
            } else {
                toast.error("Delete news error");
                dispatch({
                    type: actionTypes.DELETE_NEWS_FAILED
                })
            }
        } catch (e) {
            toast.error("Delete news error");
            console.log("Delete news FAILED", e);
            dispatch({
                type: actionTypes.DELETE_NEWS_FAILED
            })
        }
    }
}

export const editNewsStart = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editNews(data);
            if (res && res.errCode === 0) {
                toast.success("Update news success");
                dispatch(getAllNews())
                dispatch({
                    type: actionTypes.EDIT_NEWS_SUCCESS,
                })
            } else {
                toast.error("Update news error1");
                dispatch({
                    type: actionTypes.EDIT_NEWS_FAILED,
                });
            }
        } catch (e) {
            toast.error("Update news error");
            dispatch({type: actionTypes.EDIT_NEWS_FAILED,})
            console.log('editNewsFailed error',e);
        }
    }
}
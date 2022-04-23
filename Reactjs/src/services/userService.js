import axios from '../axios';


const handleLoginApi = (email, password) => {
    return axios.post('/api/login', {email, password});
}

const handleLoginApi1 = (email, password) => {
    return axios.post('/api/login-teacher', { email, password });
}



const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`);
}

const getAllTeachers = (inputId) => {
    return axios.get(`/api/get-all-teacher?id=${inputId}`);
}

const createNewTeacherService = (data) => {
    return axios.post('/api/create-new-teacher', data)
}


const createNewUserService = (data) => {
    return axios.post('/api/create-new-user', data)
}

const deleteUserService = (id) => {
    // return axios.delete('/api/delete-user', {ID: id})
    return axios.delete('/api/delete-user', {
       data: {ID: id},
    }) 
}

const deleteTeacherService = (id) => {
    return axios.delete('/api/delete-teacher', {
       data: {ID: id},
    }) 
}

const editUserService = (InputData) => {
    return axios.put('/api/edit-user', InputData) 
}

const editTeacherService = (InputData) => {
    return axios.put('/api/edit-teacher', InputData) 
}

const getAllCodeService = (inputData) => {
    return axios.get(`/api/allcode?type=${inputData}`);
}

const getSubject = (limit) => {
    return axios.get(`/api/subject-home?=${limit}`);
}

const getHocSinh = (limit) => {
    return axios.get(`/api/HocSinh-home?=${limit}`);
}

const inforTeacher = (data) => {
    return axios.post("/api/infor-teacher", data)
}

const allNews = (inputId) => {
    return axios.get(`/api/get-all-news?id=${inputId}`);
}

const saveNews = (data) => {
    return axios.post('/api/create-news', data);
}

const deleteNews = (id) => {
    return axios.delete('/api/delete-news', {
       data: {ID: id},
    }) 
}

const editNews = (InputData) => {
    return axios.put('/api/edit-news', InputData) 
}

const allClass = (inputId) => {
    return axios.get(`/api/get-all-class?id=${inputId}`);
}

const saveClass = (data) => {
    return axios.post('/api/create-class', data);
}

const deleteClass = (id) => {
    return axios.delete('/api/delete-class', {
       data: {ID: id},
    }) 
}

const editClass = (InputData) => {
    return axios.put('/api/edit-class', InputData) 
}

const getTeacherBySubject = (Mon) => {
    return axios.get(`/api/get-teacher-by-subject?TBS=${Mon}`);
}



const saveAssignment = (data) => {
    return axios.post('/api/create-teaching', data);
}

const teacherByClass = (idClass) => {
    return axios.get(`/api/get-teacher-by-class?malop=${idClass}`);
}

export {teacherByClass,saveAssignment,getTeacherBySubject,editClass,deleteClass,saveClass,allClass,editNews,deleteNews,saveNews,allNews,inforTeacher,editTeacherService,deleteTeacherService,createNewTeacherService,getAllTeachers,handleLoginApi1,getHocSinh, getSubject,editUserService,handleLoginApi,getAllUsers,createNewUserService, deleteUserService,getAllCodeService }
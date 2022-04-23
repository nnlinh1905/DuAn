import { json } from "express/lib/response";
import teacherService from "../services/teacherServices";

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!'
        })
    }

    let teacherData = await teacherService.handleUserLogin(email, password);

    return res.status(200).json({
        errCode: teacherData.errCode,
        message: teacherData.errMessage,
        user: teacherData.user ? teacherData.user : {}
    })
}

let handleGetAllTeachers = async (req, res) => {
    let id = req.query.id;
    let users = await teacherService.getAllTeachers(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: "OK",
        users
    })
}


let handleCreateNewTeacher = async (req, res) => {
    let message = await teacherService.CreateNewTeacher(req.body)
    return res.status(200).json(message)
}

let handleEditTeacher = async (req, res) => {
    let data = req.body;
    let message = await teacherService.handleEditTeacher(data);
    return res.status(200).json(message)
}

let handleDeleteTeacher = async (req, res) => {
    if (!req.body.ID) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing required parameters"
        })
    }
    let message = await teacherService.DeleteTeacher(req.body.ID)
    return res.status(200).json(message)
}


let getAllCode = async (req, res) => {
    try {
        let data = await userService.GetAllCodeService(req.query.type);
        return res.status(200).json(data);
    } catch (e) {
        console.log('Get all code error', e)
        return res.status(200).json({
            errCode: -1,
            errMessage:'Error from server'
        })
    }
}

let handleInforTeacher = async (req, res) => {
    try {
        let response = await teacherService.saveInforTeacher(req.body);
        console.log(req.body)
        return res.status(200).json(response)
    } catch (e) {
        console.log('put infor code error', e)
        return res.status(200).json({
            errCode: -1,
            errMessage:'Error from server'
        })
    }
}

let handleGetDetailTeacher = async (req, res) => {
    try {
        let info = await teacherService.getDetailTeacher(req.query.ID);
        return res.status(200).json(info)
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage:'Error from server'
        })
    }
}

let handleGetTeacherBySubject = async (req, res) => {
    try {
        let bySubject = await teacherService.TeacherBySubject(req.query.TBS)
        return res.status(200).json(bySubject)
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage:'Error from server'
        })
    }
}

module.exports = {
    handleLogin: handleLogin,
    handleGetAllTeachers: handleGetAllTeachers,
    handleCreateNewTeacher: handleCreateNewTeacher,
    handleEditTeacher: handleEditTeacher,
    handleDeleteTeacher: handleDeleteTeacher,
    getAllCode: getAllCode,
    handleInforTeacher: handleInforTeacher,
    handleGetDetailTeacher: handleGetDetailTeacher,
    handleGetTeacherBySubject:handleGetTeacherBySubject
}
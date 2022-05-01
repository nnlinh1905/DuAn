import db from '../models/index';
import ClassService from '../services/ClassServices';

let handleGetAllClass = async (req, res) => {
    try {
        let id = req.query.id;
        let DataClass = await ClassService.GetAllClass(id)
        return res.status(200).json({
            errCode: 0,
            errMessage: "OK",
            DataClass
        })
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            errMessage:'Error from server'
        })
    }
}

let handleCreateClass = async (req, res) => {
    try {
        let message = await ClassService.CreateClass(req.body)
        return res.status(200).json(message) 
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            errMessage:'Error from server'
        })
    }
}

let handleDeleteClass = async (req, res) => {
    if (!req.body.ID) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing required parameters"
        })
    }
    let message = await ClassService.DeleteClass(req.body.ID)
    return res.status(200).json(message)
}

let handleEditClass = async (req, res) => {
    let data = req.body;
    let message = await ClassService.EditClass(data);
    return res.status(200).json(message)
}

let handleEditTeaching = async (req, res) => {
    let data = req.body;
    let message = await ClassService.EditTeaching(data);
    return res.status(200).json(message)
}

module.exports = {
    handleGetAllClass: handleGetAllClass,
    handleCreateClass: handleCreateClass,
    handleDeleteClass: handleDeleteClass,
    handleEditClass: handleEditClass,
    handleEditTeaching: handleEditTeaching,
}
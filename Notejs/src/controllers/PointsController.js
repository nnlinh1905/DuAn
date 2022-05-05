import PointsServices from '../services/PointsServices';

let handleStudentByClass = async (req, res) => {
    try {
        let data = await PointsServices.studentByClass(req.query.idLop)
        return res.status(200).json(data);
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            errMessage:'Error from server'
        })
    }
}

let handleSavePoints = async (req, res) => {
    try {
        let data = await PointsServices.SavePoints(req.body)
        return res.status(200).json(data);
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            errMessage:'Error from server'
        })
    }
}

let handleGetAllPoints = async (req, res) => {
    try {
        let id = req.query.id;
        let Points = await PointsServices.GetAllPoints(id)
        return res.status(200).json({
            errCode: 0,
            errMessage: "OK",
            Points
        })
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            errMessage:'Error from server'
        })
    }
}

let handleGetPointsStudentByClass = async(req, res) => {
    try {
        let id = req.query.idLop;
        let Points = await PointsServices.GetPointsStudentByClass(id, req.query.idGV)
        return res.status(200).json({
            errCode: 0,
            errMessage: "OK",
            Points
        })
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            errMessage:'Error from server'
        })
    }
}

let handleGetPointsStudent = async (req, res) => {
    try {
        let student = await PointsServices.GetPointsStudent(req.query.idHS)
        return res.status(200).json({
            errCode: 0,
            errMessage: "OK",
            student
        })
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            errMessage:'Error from server'
        })
    }
}

module.exports = {
    handleSavePoints: handleSavePoints,
    handleStudentByClass: handleStudentByClass,
    handleGetAllPoints: handleGetAllPoints,
    handleGetPointsStudentByClass: handleGetPointsStudentByClass,
    handleGetPointsStudent: handleGetPointsStudent,
}
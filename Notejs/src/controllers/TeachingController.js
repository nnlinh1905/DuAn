import TeachingServices from '../services/TeachingServices';

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

let handleCreateTeaching = async (req, res) => {
    try {
        let message = await TeachingServices.CreateTeaching(req.body)
        return res.status(200).json(message) 
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            errMessage:'Error from server'
        })
    }
}
let handleGetAll = async (req, res) => {
     try {
         let DataClass = await TeachingServices.handleGetAllService();
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
let handleGetTeacherByLop = async (req, res) => {
    try {
        let maClass = req.query.malop;
        console.log('maClass',maClass)
        let classArr = await TeachingServices.getTeachersByLop(maClass)
        console.log('classArr',classArr)
        return res.status(200).json(classArr);
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

module.exports = {
    handleGetAllClass: handleGetAllClass,
    handleGetTeacherByLop:handleGetTeacherByLop,
    handleCreateTeaching: handleCreateTeaching,
    handleDeleteClass: handleDeleteClass,
    handleEditClass: handleEditClass,
    handleGetAll: handleGetAll
}
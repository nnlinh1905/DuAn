import TeachingServices from '../services/TeachingServices';

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
        let classArr = await TeachingServices.getTeachersByLop(maClass)
        return res.status(200).json(classArr);
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            errMessage:'Error from server'
        })
    }
}

let handleGetNameSubject = async (req, res) => {
    try {
        let idTeacher = req.query.id;
        let teacherSubject = await TeachingServices.getNameSubject(idTeacher);
        return res.status(200).json(teacherSubject);
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

let handleEditChairman = async (req, res) => {
    let data = req.body;
    let message = await TeachingServices.EditChairman(data);
    return res.status(200).json(message)
}

let handleGetChairman = async (req, res) => {
    try {
        let data = await TeachingServices.GetChairman(req.body);
        return res.status(200).json(data);
    }
    catch (e) {
        return res.status(200).json({
            errCode: -1,
            errMessage:'Error from server'
        })
    }
}

let handleGetAllChairman = async (req, res) => {
    try {
        let data = await TeachingServices.GetAllChairman(req.body);
        return res.status(200).json(data);
    }
    catch (e) {
        return res.status(200).json({
            errCode: -1,
            errMessage:'Error from server'
        })
    }
}

let handleClassByTeacher = async (req, res) => {
    try {
        let data = await TeachingServices.classByTeacher(req.query.maGV)
        return res.status(200).json(data);
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            errMessage:'Error from server'
        })
    }
}

module.exports = {
    handleGetAll: handleGetAll,
    handleGetTeacherByLop:handleGetTeacherByLop,
    handleCreateTeaching: handleCreateTeaching,
    handleDeleteClass: handleDeleteClass,
    handleEditChairman: handleEditChairman,
    handleGetNameSubject: handleGetNameSubject,
    handleGetChairman: handleGetChairman,
    handleGetAllChairman: handleGetAllChairman,
    handleClassByTeacher:handleClassByTeacher,
}
import SubjectService from "../services/SubjectService";

let getSubject = async (req, res) => {
    try {
        let limit = req.query.limit
        if (!limit) limit = 13;
        let subject = await SubjectService.getSubject(+limit);
        return res.status(200).json(subject)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server...'
        })
    }
}

let getHocSinh = async (req, res) => {
    try {
        let limit = req.query.limit
        if (!limit) limit = 20;
        let subject = await SubjectService.getHocSinh(+limit);
        return res.status(200).json(subject)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server...'
        })
    }
}

module.exports = {
    getSubject: getSubject,
    getHocSinh:getHocSinh
}
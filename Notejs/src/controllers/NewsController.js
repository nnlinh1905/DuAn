import db from '../models/index'
import NewServices from '../services/NewsServices';

let handleGetAllNews = async (req, res) => {
    try {
        let id = req.query.id;
        let news = await NewServices.GetAllNews(id)
        return res.status(200).json({
            errCode: 0,
            errMessage: "OK",
            news
        })
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            errMessage:'Error from server'
        })
    }
}

let handleCreateNews = async (req, res) => {
    try {
        let message = await NewServices.CreateNews(req.body)
        return res.status(200).json(message) 
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            errMessage:'Error from server'
        })
    }
}

let handleDeleteNews = async (req, res) => {
    if (!req.body.ID) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing required parameters"
        })
    }
    let message = await NewServices.DeleteNews(req.body.ID)
    return res.status(200).json(message)
}

let handleEditNews = async (req, res) => {
    let data = req.body;
    let message = await NewServices.EditNews(data);
    return res.status(200).json(message)
}

module.exports = {
    handleGetAllNews: handleGetAllNews,
    handleCreateNews: handleCreateNews,
    handleDeleteNews: handleDeleteNews,
    handleEditNews: handleEditNews,
    
}
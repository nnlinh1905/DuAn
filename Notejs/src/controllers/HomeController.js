import db from '../models/index'
import CRUDservices from '../services/CRUDservices'

let getHomePage = async (req, res) => {
    try {
        let data = await db.GiangDays.findAll()
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    }catch (e){
        console.log(e);
    }
    
}

let getTestPage = (req, res) => {
    return res.render('test/test.ejs')
}

let getCRUD = (req, res) => {
    return res.render("crud.ejs")
}

let postCrud = async (req, res) => {
    let message = await CRUDservices.createNewUser(req.body);
    return res.send("postcrud")
}

let displayCRUD = async (req, res) => {
    let data = await CRUDservices.getAllUsers()
    // console.log("----------------")
    // console.log(data);
    // console.log("----------------")

    return res.render('displayCRUD.ejs', {
        dataTable: data
    });

}
let getEditCRUD = async (req, res) => {
    let userID = req.query.ID;
    // console.log(userID);
    if(userID){
        let userData = await CRUDservices.getUserInfoByID(userID);
        return res.render('editCRUD.ejs', {
            user: userData
        });
    } else {
        return res.send("Khong lay duoc id");
    }
}

let putCRUD = async (req, res) => {
    let data = req.body;
    let allUser = await CRUDservices.updateCRUD(data);
    return res.render('displayCRUD.ejs', {
        dataTable: allUser
    });
}

let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDservices.deleteUserByID(id);
        return res.send("xóa tài khoản thành công")
    } else {
        return res.send("Không tìm thầy user")
    }
   
}

module.exports = {
    getHomePage:getHomePage,
    getTestPage: getTestPage,
    getCRUD: getCRUD,
    postCrud: postCrud,
    displayCRUD: displayCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD
}
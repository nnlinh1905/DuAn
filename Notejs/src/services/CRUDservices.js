import bcrypt from 'bcryptjs';
import db from '../models/index'


const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.Password);
            await db.HocSinhs.create({
                Email: data.email,
                Password: hashPasswordFromBcrypt
            })
            resolve("thành công rồi nè");
        } catch (err) {
            reject(err)
        }
    })
}

let hashUserPassword = (Password) => {
    return new Promise( async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(Password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    })
}

let getAllUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = db.HocSinhs.findAll({
                raw: true,
            });
            resolve(users);
        } catch (e) {
            reject(e);
        }
    })
}

let getUserInfoByID = (userID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.HocSinhs.findOne({
                where: { id: userID },
                raw: true, 
            })
            if (user) {
                resolve(user);
            } else {
                resolve([]);
            }
        } catch (e) {
            reject(e);
        }
    })
}

let updateCRUD = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.HocSinhs.findOne({
                where: { id: data.id },
                raw: false
            })
            if (user) {
                user.Email = data.email;
                await user.save();

                let allUser = await db.HocSinhs.findAll()
                resolve(allUser);
            }
            else {
                resolve(allUser);
            }
        } catch (err) {
            reject(err);
        }
    })
}

let deleteUserByID = (idLay) => {
    return new Promise(async(resolve, reject) => {
        try {
            let hs = await db.HocSinhs.findOne({
                where: { id:idLay}
            });

            await db.HocSinhs.destroy({
                where: { id:idLay}
            })

            
            resolve();
        } catch (err) {
            reject(err)
        }
    })
}

module.exports = {
    createNewUser: createNewUser,
    hashUserPassword: hashUserPassword,
    getAllUsers: getAllUsers,
    getUserInfoByID: getUserInfoByID,
    updateCRUD: updateCRUD,
    deleteUserByID:deleteUserByID
}
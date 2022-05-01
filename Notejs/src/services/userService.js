import db from "../models/index";
import bcrypt from 'bcryptjs';
import res from "express/lib/response";
const salt = bcrypt.genSaltSync(10);


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

let handleUserLogin = (email, password) => {
    return new Promise(async(resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserEmail(email);
            if (isExist) {
                let user = await db.HocSinhs.findOne({
                    where: { Email: email },
                    raw: true,
                })
                if (user) {
                    let check = await bcrypt.compareSync(password, user.Password)
                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = '';
                        delete user.Password;
                        userData.user = user;
                    } else {
                        userData.errCode = 3;
                        userData.errMessage = 'Wrong password';
                    }
                } else {
                    userData.errCode = 2;
                    userData.errMessage = `User's not found~`
                }
            } else {
                userData.errCode = 1;
                userData.errMessage = "Your's Email isn't exist in your system. Plz try other email";
            }
            resolve(userData);
        } catch (e) {
            reject(e)
        }
    })
}

let checkUserEmail = (email) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.HocSinhs.findOne({
                where: {Email: email}
            });

            if (user) {
                resolve(user);
            } else {
                resolve(false);
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getAllUsers = (userID) => {
    return new Promise( async (resolve, reject) => {
        try {
            let users = '';
            if (userID === 'ALL') {
                users = await db.HocSinhs.findAll({
                    attributes: {
                        exclude: ['Password']
                     }
                })
            }
            if (userID && userID !== 'ALL') {
                users = await db.HocSinhs.findOne({
                    where: {id: userID},
                })
            }
            resolve(users)
        } catch (e) {
            
        }
    })
}

let CreateNewUser = (data) => {
    return new Promise( async(resolve, reject)=>{
        try {
            let check = await checkUserEmail(data.Email)
            if (check) {
                resolve({
                    errCode: 1,
                    errMessage: 'your email is already in used, plz try another email!'
                });
            } else {
                let hashPasswordFromBcrypt = await hashUserPassword(data.Password);
                await db.HocSinhs.create({
                    HoTenHS: data.HoTenHS,
                    NamHoc: data.NamHoc,
                    MaLop: data.MaLop,
                    MaTonGiao: data.MaTonGiao,
                    GioiTinh: data.GioiTinh,
                    NgaySinh: data.NgaySinh,
                    DiaChi: data.DiaChi,
                    SDT: data.SDT,
                    HoTenCha: data.HoTenCha,
                    NamSinhCha: data.NamSinhCha,
                    HoTenMe: data.HoTenMe,
                    NamSinhMe: data.NamSinhMe,
                    Email: data.Email,
                    Password: hashPasswordFromBcrypt,
                    avatar: data.avatar
                })
                resolve({
                    errCode: 0,
                    message: 'ok'
                });
            }
        } catch (e) {
            reject(e)
        }
    })
}

let DeleteUser = (idUser) => {
    return new Promise(async (resolve, reject) => {
        let user = await db.HocSinhs.findOne({
            where: {ID: idUser}
        })
        if (!user) {
            resolve({
                errCode: 2,
                errMessage: `The user is't exit`
            })
        }
        await db.HocSinhs.destroy({
            where: {ID: idUser}
        })
        resolve({
            errCode: 0,
            message: 'the user is deleted'
        })
    })
}

let updateUserData = (userData) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!userData.ID) {
                resolve({
                    errCode: 2,
                    errMessage: `Missing required parameters`
                });
            }
            let user = await db.HocSinhs.findOne({
                where: { ID: userData.ID },
                raw: false
            })
            if (user) {
                user.Email = userData.Email,
                    user.HoTenHS = userData.HoTenHS,
                    user.NamHoc = userData.NamHoc,
                    user.MaLop = userData.MaLop,
                    user.MaTonGiao = userData.MaTonGiao,
                    user.GioiTinh = userData.GioiTinh,
                    user.NgaySinh = userData.NgaySinh,
                    user.DiaChi = userData.DiaChi,
                    user.SDT = userData.SDT,
                    user.HoTenCha = userData.HoTenCha,
                    user.NamSinhCha = userData.NamSinhCha,
                    user.HoTenMe = userData.HoTenMe;
                    user.NamSinhMe = userData.NamSinhMe;
                if (userData.avatar) {
                    user.avatar = userData.avatar;
                }
                
                user.Password = userData.Password
                await user.save()
                resolve({
                    errCode: 0,
                    message: 'update the user succeeds'
                })
            } else {
                resolve({
                    errCode: 1,
                    errMessage: `user's not found!`
                });
            }
        } catch (e) {
            reject(e)
        }
    })
}

let GetAllCodeService = (typeInput) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!typeInput) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameters'
                })
            } else {
                let res = {};
                let allcode = await db.allcodes.findAll({
                    where: { type: typeInput },
                });
                res.errCode = 0;
                res.data = allcode;
                resolve(res);
            }
        } catch (e) {
            reject(e);
        }
    })
}

let StudentByClass = (idLop) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = '';
            users = await db.HocSinhs.findAll({
                where: {MaLop: idLop},
                attributes: {
                    exclude: ['Password']
                }
            })
            resolve(users)
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    checkUserEmail: checkUserEmail,
    handleUserLogin: handleUserLogin,
    getAllUsers: getAllUsers,
    CreateNewUser: CreateNewUser,
    DeleteUser: DeleteUser,
    updateUserData: updateUserData,
    GetAllCodeService: GetAllCodeService,
    StudentByClass: StudentByClass
}
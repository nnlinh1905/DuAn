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
                let user = await db.GiaoViens.findOne({
                    attributes:['Email', 'Password', 'HoTenGV'],
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
            let user = await db.GiaoViens.findOne({
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

let getAllTeachers = (userID) => {
    return new Promise( async (resolve, reject) => {
        try {
            let users = '';
            if (userID === 'ALL') {
                users = await db.GiaoViens.findAll({
                    attributes: {
                        exclude: ['Password']
                     }
                })
            }
            if (userID && userID !== 'ALL') {
                users = await db.GiaoViens.findOne({
                    where: {ID: userID},
                })
            }
            resolve(users)
        } catch (e) {
            
        }
    })
}

let CreateNewTeacher = (data) => {
    return new Promise( async(resolve, reject)=>{
        try {
            let check = await checkUserEmail(data.Email)
            console.log(data)
            if (check) {
                resolve({
                    errCode: 1,
                    errMessage: 'your email is already in used, plz try another email!'
                });
            } else {
                let hashPasswordFromBcrypt = await hashUserPassword(data.Password);
                await db.GiaoViens.create({
                    HoTenGV: data.HoTenGV,
                    MaChuyenMon: data.MaChuyenMon,
                    MaChucDanh: data.MaChucDanh,
                    MaTonGiao: data.MaTonGiao,
                    GioiTinh: data.GioiTinh,
                    NgaySinh: data.NgaySinh,
                    DiaChi: data.DiaChi,
                    SDT: data.SDT,
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
            console.log("", e);
            reject(e)
        }
    })
}

let DeleteTeacher = (idUser) => {
    return new Promise(async (resolve, reject) => {
        let user = await db.GiaoViens.findOne({
            where: {ID: idUser}
        })
        if (!user) {
            resolve({
                errCode: 2,
                errMessage: `The user is't exit`
            })
        }
        await db.GiaoViens.destroy({
            where: {ID: idUser}
        })
        resolve({
            errCode: 0,
            message: 'the user is deleted'
        })
    })
}

let handleEditTeacher = (userData) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log('userData',userData)
            if (!userData.ID) {
                resolve({
                    errCode: 2,
                    errMessage: `Missing required parameters`
                });
            }
            let user = await db.GiaoViens.findOne({
                where: { ID: userData.ID },
                raw: false
            })
            if (user) {
                user.Email = userData.Email,
                    user.HoTenGV = userData.HoTenGV,
                    user.MaChuyenMon = userData.MaChuyenMon,
                    user.MaChucDanh = userData.MaChucDanh,
                    user.MaTonGiao = userData.MaTonGiao,
                    user.GioiTinh = userData.GioiTinh,
                    user.NgaySinh = userData.NgaySinh,
                    user.DiaChi = userData.DiaChi,
                    user.SDT = userData.SDT;
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

let saveInforTeacher = (data) => {
    return new Promise( async (resolve, reject) => {
        try {
            if (!data.teacherID || !data.contentHTML || !data.contentMarkdown) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing parameter"
                })
            } else {
                await db.markdowns.create({
                    contentHTML: data.contentHTML,
                    contentMarkdown: data.contentMarkdown,
                    description: data.description,
                    teacherID: data.teacherID,
                })
                resolve({
                    errCode: 0,
                    errMessage: "save infor doctor succeed"
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getDetailTeacher = (ID) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!ID) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing required parameters"
                })
            } else {
                let data = await db.GiaoViens.findOne({
                    where: { ID: ID },
                    attributes: {
                        exclude: ['Password']
                    },
                    include: [
                        {
                            model: db.markdowns,
                            attributes:['contentHTML','contentMarkdown','description','teacherID']
                        },
                        {
                            model: db.allcodes, as: 'MaChucDanhData', attributes:['valueVi', 'valueEn']
                        },
                        {
                            model: db.allcodes, as: 'MaChuyenMonData', attributes:['valueVi', 'valueEn']
                        },

                    ],
                    raw: true,
                    nest: true
                })
                resolve({
                    errCode: 0,
                    data: data
                })
            }
        } catch (e) {
            reject(e);                              
        }
    })
}

let TeacherBySubject = (TBS) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!TBS) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing required parameters"
                })
            } else {
                let res = await db.GiaoViens.findAll({
                    where: {MaChuyenMon: TBS}
                })
                resolve({
                    errCode: 0,
                    errMessage: "ok",
                    res
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    checkUserEmail: checkUserEmail,
    handleUserLogin: handleUserLogin,
    getAllTeachers: getAllTeachers,
    CreateNewTeacher: CreateNewTeacher,
    DeleteTeacher: DeleteTeacher,
    handleEditTeacher: handleEditTeacher,
    GetAllCodeService: GetAllCodeService,
    saveInforTeacher: saveInforTeacher,
    getDetailTeacher: getDetailTeacher,
    TeacherBySubject: TeacherBySubject,
}
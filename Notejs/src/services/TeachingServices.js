import db from "../models/index";

let GetAllClass = (id) => {
    return new Promise( async (resolve, reject) => {
        try {
            let data = ''
            if (id === 'ALL') {
                data = await db.LopHocs.findAll()
            }
            if (id && id !== 'ALL') {
                data = await db.LopHocs.findOne({
                    where: { ID: id },
                    include: [
                        {
                            model: db.markdowns,
                            attributes:['valueEn','valueVi']
                        },
                    ],
                    raw: true,
                    nest: true
                })
            }
            resolve(data)
        } catch (e) {
            reject(e);
        }
    })
}

let CreateTeaching = (data) => {
    return new Promise( async(resolve, reject)=>{
        try {
            if (!data.NamHoc || !data.MaLop || !data.MaGV) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing parameter"
                })
            } else {
                await db.GiangDays.create({
                    NamHoc: data.NamHoc,
                    MaLop: data.MaLop,
                    MaGV: data.MaGV
                })
                resolve({
                    errCode: 0,
                    errMessage: "save class succeed"
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getTeachersByLop = (idClass) => {
    return new Promise( async(resolve, reject) => {
        try {
            let teachers = '';
            if (!idClass) {
                resolve({
                    errCode: 1,
                    errMessage: 'No code layer!'
                })
            } else {
                teachers = await db.GiangDays.findAll({
                    where: { MaLop: idClass },
                    include: [
                        {
                            model: db.LopHocs, as: 'LopData',
                        },
                        {
                            model: db.GiaoViens, as: 'MaGVData',
                            include: [
                                {
                                    model: db.allcodes, as: 'MaChuyenMonData'
                                },
                                {
                                    model: db.allcodes, as: 'MaChucDanhData'
                                }
                            ],
                            raw: true,
                            nest: true,
                        },
                    ],
                    raw: true,
                    nest: true
                })
                resolve({
                    errCode: 0,
                    errMessage: 'ok',
                    teachers
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getNameSubject = (ID) => {
    return new Promise( async(resolve, reject) => {
        try {
            let nameSubject= '';
            if (!ID) {
                resolve({
                    errCode: 1,
                    errMessage: 'No code layer!'
                })
            } else {
                nameSubject = await db.GiaoViens.findOne({
                    where: { ID: ID },
                    attributes: ['ID'],
                    include: [
                        {
                            model: db.allcodes, as: 'MaChuyenMonData', attributes:['keyMap']
                        },
                    ],
                    raw: true,
                    nest: true
                })
                resolve({
                    errCode: 0,
                    errMessage: 'ok',
                    nameSubject
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let handleGetAllService = () => {
    return new Promise( async(resolve, reject) => {
        try {
            let teachers = '';
                teachers = await db.GiangDays.findAll()
                resolve({
                    errCode: 0,
                    errMessage: 'ok',
                    teachers
                })
        } catch (e) {
            reject(e)
        }
    })
}

let DeleteClass = (id) => {
    return new Promise(async (resolve, reject) => {
        let Lop = await db.LopHocs.findOne({
            where: {ID: id}
        })
        if (!Lop) {
            resolve({
                errCode: 2,
                errMessage: `The news is't exit`
            })
        }
        await db.LopHocs.destroy({
            where: {ID: id}
        })
        resolve({
            errCode: 0,
            message: 'the news is deleted'
        })
    })
}

let EditChairman = (TeachingData) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!TeachingData.id) {
                resolve({
                    errCode: 2,
                    errMessage: `Missing required parameters`
                });
            }

            let Lop = await db.LopHocs.findOne({
                where: { ID: TeachingData.id },
                raw: false
            })
            if (Lop) {
                Lop.ChuNhiem = TeachingData.teacher
                await Lop.save()
            }


            let data = await db.GiaoViens.findOne({
                where: { ID: TeachingData.teacher },
                raw: false
            })
            if (data) {
                data.MaChucDanh = "GVCN"
                await data.save();
            }

            let data_old = await db.GiaoViens.findOne({
                where: { ID: TeachingData.teacher_old},
                raw: false
            })
            if (data_old) {
                data_old.MaChucDanh = "GVBM"
                await data_old.save();
            }

            resolve({
                errCode: 0,
                errMessage: `ok`,
            });
        } catch (e) {
            reject(e)
        }
    })
}

let GetChairman = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let chairman = '';
            let lop = '';
            chairman = await db.GiaoViens.findOne({
                where: { ID: data.teacher },
                attributes: {
                    exclude: ['Password']
                },
                include: [
                    {
                        model: db.allcodes, as: 'MaChuyenMonData', attributes:['valueVi', 'valueEn']
                    },
                ],
                raw: true,
                nest: true
            })
            lop = await db.LopHocs.findOne({
                where: {ID: data.lop}
            })
            resolve({
                errCode: 0,
                errMessage: 'OK',
                lop,
                chairman
            })
        } catch (e) {
            reject(e)
        }
    })
}

// let GetAllChairman = (req, res) => {
//     return new Promise( async (resolve, reject) => {
//         try {
//             let Assignment = await db.LopHocs.findAll()
//         } catch (e) {
//             reject(e)
//         }
//     })
// }

let classByTeacher = (idGV) => {
    return new Promise(async (resolve, reject) => {
        try {
            let allClass = '';
            if (!idGV) {
                resolve({
                    errCode: 1,
                    errMessage: 'No teacher!'
                })
            } else {
                allClass = await db.GiangDays.findAll({
                    where: { MaGV: idGV },
                    include: [
                        {
                            model: db.LopHocs, as: 'LopData',
                        },
                    ],
                    raw: true,
                    nest: true,        
                })
            }
            resolve({
                errCode: 0,
                errMessage: 'ok',
                allClass
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    getTeachersByLop: getTeachersByLop,
    GetAllClass: GetAllClass,
    CreateTeaching: CreateTeaching,
    DeleteClass: DeleteClass,
    EditChairman: EditChairman,
    handleGetAllService: handleGetAllService,
    getNameSubject: getNameSubject,
    GetChairman: GetChairman,
    // GetAllChairman: GetAllChairman,
    classByTeacher: classByTeacher,
}
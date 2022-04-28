import db from '../models/index'

// let checkLop = (Lop) => {
//     return new Promise(async(resolve, reject) => {
//         try {
//             let lop = await db.LopHocs.findOne({
//                 where: {TenLop: Lop}
//             });
//             if (lop) {
//                 resolve(lop);
//             } else {
//                 resolve(false);
//             }
//         } catch (e) {
//             reject(e)
//         }
//     })
// }

let GetAllClass = (id) => {
    return new Promise( async (resolve, reject) => {
        try {
            let data = ''
            if (id === 'ALL') {
                data = await db.LopHocs.findAll({
                    include: [
                        {
                            model: db.GiaoViens, as: 'LopGiaoVien',
                            include: [
                                {
                                    model: db.allcodes, as: 'MaChuyenMonData'
                                },
                                {
                                    model: db.allcodes, as: 'MaChucDanhData'
                                }
                            ]
                        },
                        { model: db.allcodes, as: 'NamHocNe'}
                    ],
                raw: true,
                nest: true,
                })
            }
            if (id && id !== 'ALL') {
                data = await db.LopHocs.findOne({
                    where: { ID: id },
                    include: [
                        { model: db.GiaoViens, as: 'LopGiaoVien' },
                        { model: db.allcodes, as: 'NamHocNe'}
                    ],
                    raw: true,
                    nest: true,
                })
            }
            resolve(data)
        } catch (e) {
            reject(e);
        }
    })
}

let CreateClass = (data) => {
    return new Promise( async(resolve, reject)=>{
        try {
            if (!data.NamHoc || !data.MaKhoi || !data.TenLop) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing parameter"
                })
            } else {
                await db.LopHocs.create({
                    NamHoc: data.NamHoc,
                    MaKhoi: data.MaKhoi,
                    TenLop: data.TenLop
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

let EditClass = (classData) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log('id',classData.id)
            if (!classData.id) {
                resolve({
                    errCode: 2,
                    errMessage: `Missing required parameters`
                });
            }
            let Lop = await db.LopHocs.findOne({
                where: { ID: classData.id },
                raw: false
            })
            if (Lop) {
                Lop.TenLop = classData.TenLop,
                Lop.MaKhoi = classData.MaKhoi,
                Lop.NamHoc = classData.NamHoc,
                await Lop.save()
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

let checkChuNhiem = (CN) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check = await db.LopHocs.findOne({
                where: {ChuNhiem: CN},
            })
            if (check) {
                resolve(check);
            } else {
                resolve(false);
            }
        } catch (e) {
            reject(e)
        }
    })
}

let EditTeaching = (teaching) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!teaching.lop) {
                resolve({
                    errCode: 2,
                    errMessage: `Missing required parameters`
                });
            }
            
            // let check = this.checkChuNhiem(teaching.teacher)

            // if (check) {
            //     resolve({
            //         errCode: 3,
            //         errMessage: "different from the master class"
            //     })
            // }
            
            let data = await db.LopHocs.findOne({
                where: { ID: teaching.lop },
                raw: false
            })
            if (data) {
                data.ChuNhiem = teaching.teacher
                await data.save();
            } else {
                resolve({
                    errCode: 1,
                    errMessage: `Error!`
                });
            }

            let dataCN = await db.GiaoViens.findOne({
                where: { ID: teaching.teacher },
                raw: false
            })
            if (dataCN) {
                dataCN.MaChucDanh = "GVCN"
                dataCN.save();
            } else {
                resolve({
                    errCode: 1,
                    errMessage: `Error!`
                });
            }

            resolve({
                errCode: 0,
                message: 'ok',
                dataCN,
                data
            })

        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    GetAllClass: GetAllClass,
    CreateClass: CreateClass,
    DeleteClass: DeleteClass,
    EditClass: EditClass,
    EditTeaching:EditTeaching,
}
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
            // idClass =18
            console.log('id:', idClass)
            let teachers = '';
            if (!idClass) {
                resolve({
                    errCode: 1,
                    errMessage: 'No code layer!'
                })
            } else {
                teachers = await db.GiangDays.findAll({
                    where: { MaLop: idClass },
                    // include: [
                    //     {
                    //         model: db.LopHocs, as: 'MaGVData', attributes:['TenLop']
                    //     },
                    //     // {
                    //     //     model: db.GiaoViens, as: 'LopData', attributes:['HoTenGV']
                    //     // },
                    // ],
                    raw: true,
                    nest: true
                })
                console.log('teachers', teachers)
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

let handleGetAllService = () => {
    return new Promise( async(resolve, reject) => {
        try {
            let teachers = '';
                teachers = await db.GiangDays.findAll()
                console.log('teachers', teachers)
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

module.exports = {
    getTeachersByLop: getTeachersByLop,
    GetAllClass: GetAllClass,
    CreateTeaching: CreateTeaching,
    DeleteClass: DeleteClass,
    EditClass: EditClass,
    handleGetAllService: handleGetAllService
}
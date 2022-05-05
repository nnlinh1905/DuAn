import db from '../models/index'

let studentByClass = (idLop) => {
    return new Promise(async (resolve, reject) => {
        try {
            let studentArr = ''
            if (!idLop) {
                resolve({
                    errCode: 1,
                    errMessage: 'No Layer'
                })
            } else {
                studentArr = await db.HocSinhs.findAll({
                    where: {MaLop: idLop},
                })
                resolve({
                    errCode: 0,
                    errMessage: 'ok',
                    studentArr
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let SavePoints = (kt) => {
    return new Promise( async (resolve, reject) => {
        try {
            if (!kt.MaHS || !kt.MaGV || !kt.MaMonHoc || !kt.MaLop) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing parameter"
                })
            } else {
                await db.KiemTras.create({
                    MaHS: kt.MaHS,
                    MaGV: kt.MaGV,
                    MaLop: kt.MaLop,
                    MaMonHoc: kt.MaMonHoc,
                    KiemTra1: kt.KiemTra1,
                    KiemTra2: kt.KiemTra2,
                    KiemTra3: kt.KiemTra3,
                    KiemTraCuoiKy: kt.KiemTraCuoiKy,
                })
                resolve({
                    errCode: 0,
                    errMessage: "save news succeed"
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let GetAllPoints = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let Point = ''
            if (id === 'ALL') {
                Point = await db.KiemTras.findAll({
                    include: [
                        { model: db.GiaoViens, as: 'KiemTraGiaoVien'},
                        { model: db.HocSinhs, as: 'KiemTraHocSinh'},
                        { model: db.allcodes, as: 'KiemTraMonHoc'},
                    ],
                    raw: true,
                    nest: true,
                })
            }
            if (id && id !== 'ALL') {
                Point = await db.KiemTras.findOne({
                    where: {ID: id}
                })
            }
            resolve(Point)
        } catch (e) {
            reject(e);
        }
    })
} 

let GetPointsStudentByClass = (idLop, idGV) => {
    return new Promise(async (resolve, reject) => {
        try {
            let Point = ''
            Point = await db.KiemTras.findAll({
                where: {MaLop: idLop, MaGV: idGV},
                include: [
                    { model: db.GiaoViens, as: 'KiemTraGiaoVien'},
                    { model: db.HocSinhs, as: 'KiemTraHocSinh'},
                    { model: db.allcodes, as: 'KiemTraMonHoc' },
                    { model: db.LopHocs, as: 'KiemTraLop'}
                ],
                raw: true,
                nest: true,
            })
            resolve(Point)
        } catch (e) {
            reject(e);
        }
    })
}

let GetPointsStudent = (idHS) => {
    return new Promise(async (resolve, reject) => {
        try {
            let Point = ''
            Point = await db.KiemTras.findAll({
                where: {MaHS: idHS},
                include: [
                    { model: db.GiaoViens, as: 'KiemTraGiaoVien'},
                    { model: db.HocSinhs, as: 'KiemTraHocSinh'},
                    { model: db.allcodes, as: 'KiemTraMonHoc' },
                    { model: db.LopHocs, as: 'KiemTraLop'}
                ],
                raw: true,
                nest: true,
            })
            resolve(Point)
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    studentByClass: studentByClass,
    SavePoints: SavePoints,
    GetAllPoints: GetAllPoints,
    GetPointsStudentByClass: GetPointsStudentByClass,
    GetPointsStudent: GetPointsStudent,
}
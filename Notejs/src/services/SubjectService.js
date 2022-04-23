import db from '../models/index';

let getSubject = (limit) => {
    return new Promise( async(resolve, reject) => {
        try {
            let subject = await db.MonHocs.findAll({
                limit: limit,
                order: [['createdAt', 'DESC']],
                // include: [
                //     { model: db.allcodes, as: 'NamHocData', attributes: ['valueEn', 'valueVi'] },
                //     { model: db.allcodes, as: 'MaLopData', attributes: ['valueEn', 'valueVi'] },
                //     { model: db.allcodes, as: 'MaTonGiaoData', attributes: ['valueEn', 'valueVi']}
                // ],
                raw: true,
                nest: true,
            });
            resolve({
                errCode: 0,
                data: subject
            });
        } catch(e) {
            reject(e);
        }
        
    })
}

let getHocSinh = (limit) => {
    return new Promise( async(resolve, reject) => {
        try {
            let subject = await db.HocSinhs.findAll({
                limit: limit,
                order: [['createdAt', 'DESC']],
                attributes: {
                    exclude: ['avatar', 'Password']
                },
                include: [
                    { model: db.allcodes, as: 'NamHocData', attributes: ['valueEn', 'valueVi'] },
                    { model: db.allcodes, as: 'MaLopData', attributes: ['valueEn', 'valueVi'] },
                    { model: db.allcodes, as: 'MaTonGiaoData', attributes: ['valueEn', 'valueVi']}
                ],
                raw: true,
                nest: true,
            });
            resolve({
                errCode: 0,
                data: subject
            });
        } catch(e) {
            reject(e);
        }
        
    })
}

module.exports = {
    getSubject: getSubject,
    getHocSinh:getHocSinh
}
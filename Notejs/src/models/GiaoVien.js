'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GiaoViens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GiaoViens.hasOne(models.markdowns, { foreignKey: 'teacherID' })
      
      GiaoViens.belongsTo(models.allcodes, { foreignKey: 'MaChuyenMon', targetKey: 'keyMap', as: 'MaChuyenMonData' })
      GiaoViens.belongsTo(models.allcodes, { foreignKey: 'MaChucDanh', targetKey: 'keyMap', as: 'MaChucDanhData'})
      
      GiaoViens.hasMany(models.GiangDays, { foreignKey: 'id', as: 'MaGVData' })
      
      GiaoViens.hasMany(models.LopHocs, { foreignKey: 'id', as: 'LopGiaoVien' })

      //kiểm tra
      GiaoViens.hasMany(models.KiemTras, {foreignKey: 'MaGV', as: 'KiemTraGiaoVien'})
    }
  };  
  GiaoViens.init({
    HoTenGV: DataTypes.STRING,
    MaXaPhuong: DataTypes.STRING,
    MaChuyenMon: DataTypes.STRING,
    MaChucDanh: DataTypes.STRING,
    MaTonGiao: DataTypes.STRING,
    GioiTinh: DataTypes.STRING,
    NgaySinh: DataTypes.DATE,
    DiaChi: DataTypes.STRING,
    Email: DataTypes.STRING,
    SDT: DataTypes.STRING,
    Password: DataTypes.STRING,
    Quyen: DataTypes.STRING,
    avatar: DataTypes.BLOB('long'),
  }, {
    sequelize,
    modelName: 'GiaoViens',
  });
  return GiaoViens;
};
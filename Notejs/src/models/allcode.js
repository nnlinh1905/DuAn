'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class allcodes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      allcodes.hasMany(models.HocSinhs, { foreignKey: 'NamHoc', as: 'NamHocData' })
      allcodes.hasMany(models.HocSinhs, { foreignKey: 'MaLop', as: 'MaLopData' })
      allcodes.hasMany(models.HocSinhs, { foreignKey: 'MaTonGiao', as: 'MaTonGiao' })
      
      allcodes.hasMany(models.GiaoViens, { foreignKey: 'MaChuyenMon', as: 'MaChuyenMonData' })
      allcodes.hasMany(models.GiaoViens, { foreignKey: 'MaChucDanh', as: 'MaChucDanhData' })
      
      allcodes.hasMany(models.LopHocs, { foreignKey: 'NamHoc', as: 'NamHocNe' })
      allcodes.hasMany(models.LopHocs, { foreignKey: 'MaKhoi', as: 'MaKhoiData' })
    }
  };
    allcodes.init({
        keyMap: DataTypes.STRING,
        type: DataTypes.STRING,
        valueEn: DataTypes.STRING,
        valueVi: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'allcodes',
  });
  return allcodes;
};
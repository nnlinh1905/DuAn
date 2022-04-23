'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HocSinhs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      HocSinhs.belongsTo(models.allcodes, { foreignKey: 'NamHoc', targetKey: 'keyMap', as:'NamHocData' })
      HocSinhs.belongsTo(models.allcodes, { foreignKey: 'MaLop', targetKey: 'keyMap', as:'MaLopData' })
      HocSinhs.belongsTo(models.allcodes, {foreignKey: 'MaTonGiao', targetKey: 'keyMap', as:'MaTonGiaoData' })
    }
  };
  HocSinhs.init({
    HoTenHS: DataTypes.STRING,
    NamHoc: DataTypes.STRING,
    MaLop: DataTypes.STRING,
    MaXaPhuong: DataTypes.STRING,
    MaTonGiao: DataTypes.STRING,
    GioiTinh: DataTypes.STRING,
    NgaySinh: DataTypes.DATE,
    DiaChi: DataTypes.STRING,
    SDT: DataTypes.STRING,
    Email: DataTypes.STRING,
    HoTenCha: DataTypes.STRING,
    NamSinhCha: DataTypes.DATE,
    HoTenMe: DataTypes.STRING,
    NamSinhMe: DataTypes.DATE,
    Password: DataTypes.STRING,
    avatar: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'HocSinhs',
  });
  return HocSinhs;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };  
  Admins.init({
    HoTen: DataTypes.STRING,
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
  }, {
    sequelize,
    modelName: 'Admins',
  });
  return Admins;
};
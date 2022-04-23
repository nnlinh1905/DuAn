'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class KiemTras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
    KiemTras.init({
        MaGV: DataTypes.INTEGER,
        MaHS: DataTypes.INTEGER,
        MaMonHoc: DataTypes.INTEGER,
        KiemTra1: DataTypes.INTEGER,
        KiemTra2: DataTypes.INTEGER,
        KiemTra3: DataTypes.INTEGER,
        KiemTraGiuaKy: DataTypes.INTEGER,
        KiemTraCuoiKy: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'KiemTras',
  });
  return KiemTras;
};
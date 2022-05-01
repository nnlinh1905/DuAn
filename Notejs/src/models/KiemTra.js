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
      KiemTras.belongsTo(models.GiaoViens, { foreignKey: 'MaGV', targetKey: 'id', as: 'KiemTraGiaoVien' })
      KiemTras.belongsTo(models.HocSinhs, { foreignKey: 'MaHS', targetKey: 'id', as: 'KiemTraHocSinh' })
      KiemTras.belongsTo(models.allcodes, { foreignKey: 'MaMonHoc', targetKey: 'keyMap', as: 'KiemTraMonHoc' })
      KiemTras.belongsTo(models.LopHocs, { foreignKey: 'MaLop', targetKey: 'id', as: 'KiemTraLop' })
      
    }
  };
    KiemTras.init({
        MaGV: DataTypes.INTEGER,
        MaHS: DataTypes.INTEGER,
        MaLop: DataTypes.INTEGER,
        MaMonHoc: DataTypes.STRING,
        KiemTra1: DataTypes.DOUBLE,
        KiemTra2: DataTypes.DOUBLE,
        KiemTra3: DataTypes.DOUBLE,
        KiemTraCuoiKy: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'KiemTras',
  });
  return KiemTras;
};
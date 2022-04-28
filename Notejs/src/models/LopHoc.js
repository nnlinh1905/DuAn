'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LopHocs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this methaod automatically.
     */
    static associate(models) {
      LopHocs.belongsTo(models.allcodes, { foreignKey: 'NamHoc', targetKey: 'keyMap', as: 'NamHocNe' })
      LopHocs.belongsTo(models.allcodes, { foreignKey: 'MaKhoi', targetKey: 'keyMap', as: 'MaKhoiData' })
      
      LopHocs.hasMany(models.GiangDays, { foreignKey: 'id', as: 'LopData' })

      LopHocs.belongsTo(models.GiaoViens, { foreignKey: 'ChuNhiem', targetKey: 'id', as: 'LopGiaoVien' })
    }
  };
    LopHocs.init({
    NamHoc: DataTypes.STRING,
    MaKhoi: DataTypes.STRING,
    TenLop: DataTypes.STRING,
    ChuNhiem: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'LopHocs',
  });
  return LopHocs;
};
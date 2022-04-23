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
      LopHocs.belongsTo(models.allcodes, { foreignKey: 'NamHoc', target: 'keyMap', as: 'NamHocNe' })
      LopHocs.belongsTo(models.allcodes, { foreignKey: 'MaKhoi', target: 'keyMap', as: 'MaKhoiData' })
      
      LopHocs.hasMany(models.GiangDays, {foreignKey: 'MaLop', as: 'LopData'})
    }
  };
    LopHocs.init({
    NamHoc: DataTypes.STRING,
    MaKhoi: DataTypes.STRING,
    TenLop: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LopHocs',
  });
  return LopHocs;
};
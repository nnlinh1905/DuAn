'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GiangDays extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GiangDays.belongsTo(models.GiaoViens, { foreignKey: 'MaGV', target: 'ID', as: 'MaGVData' });
      GiangDays.belongsTo(models.LopHocs, { foreignKey: 'MaLop', target: 'ID', as: 'LopData' });
    }
  };
    GiangDays.init({
        NamHoc: DataTypes.STRING,
        MaLop: DataTypes.STRING,
        MaGV: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'GiangDays',
  });
  return GiangDays;
};
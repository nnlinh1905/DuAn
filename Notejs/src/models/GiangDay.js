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
      GiangDays.belongsTo(models.GiaoViens, { foreignKey: 'MaGV', targetKey: 'id', as: 'MaGVData' });
      GiangDays.belongsTo(models.LopHocs, { foreignKey: 'MaLop', targetKey:'id', as: 'LopData' });
      
    }
  };
    GiangDays.init({
        NamHoc: DataTypes.STRING,
        MaLop: DataTypes.INTEGER,
        MaGV: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'GiangDays',
  });
  return GiangDays;
};
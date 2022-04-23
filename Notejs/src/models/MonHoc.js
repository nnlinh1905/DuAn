'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MonHocs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
    MonHocs.init({
      TenMonHoc: DataTypes.STRING,
      avatar: DataTypes.BLOB,
      valueVi: DataTypes.STRING,
      valueEn: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'MonHocs',
  });
  return MonHocs;
};
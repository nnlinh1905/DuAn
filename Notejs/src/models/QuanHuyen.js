'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuanHuyens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
    QuanHuyens.init({
        MaTinhTP: DataTypes.INTEGER,
        TenQuanHuyen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'QuanHuyens',
  });
  return QuanHuyens;
};
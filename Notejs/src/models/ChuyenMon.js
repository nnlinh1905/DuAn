'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChuyenMons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
    ChuyenMons.init({
        TenChuyenMon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ChuyenMons',
  });
  return ChuyenMons;
};
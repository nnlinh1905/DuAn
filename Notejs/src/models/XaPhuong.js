'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class XaPhuongs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
    XaPhuongs.init({
        MaXaPhuong: DataTypes.INTEGER,
        TenXaPhuong: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'XaPhuongs',
  });
  return XaPhuongs;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class markdowns extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      markdowns.belongsTo(models.GiaoViens, { foreignKey: 'teacherID'})
    }
  };
    markdowns.init({
        contentHTML: DataTypes.TEXT('long'),
        contentMarkdown: DataTypes.TEXT('long'),
        description: DataTypes.TEXT('long'),
        SubjectID: DataTypes.INTEGER,
        teacherID: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'markdowns',
  });
  return markdowns;
};
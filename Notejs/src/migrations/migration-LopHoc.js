'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('LopHocs', {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NamHoc: {
        allowNull: false,
        type: Sequelize.STRING
      },
      MaKhoi: {
        type: Sequelize.STRING
      },
      TenLop: {
        type: Sequelize.STRING
      },
      ChuNhiem: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('LopHocs');
  }
};
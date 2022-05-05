'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Admins', {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      HoTen: {
        type: Sequelize.STRING
      },
      MaChuyenMon: {
        type: Sequelize.STRING
      },
      MaChucDanh: {
        type: Sequelize.STRING
      },      
      MaTonGiao: {
        type: Sequelize.STRING
      },
      GioiTinh: {
        type: Sequelize.STRING,
      },
      NgaySinh: {
        type: Sequelize.DATE,
      },
      DiaChi: {
        type: Sequelize.STRING,
      },
      Email: {
        type: Sequelize.STRING,
      },
      SDT: {
        type: Sequelize.STRING,
      },
      Password: {
        type: Sequelize.STRING,
      },
      Quyen: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Admins');
  }
};
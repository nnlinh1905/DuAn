'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('HocSinhs', {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NamHoc: {
        type: Sequelize.STRING
      },
      MaLop: {
        type: Sequelize.STRING
      },
      MaXaPhuong: {
        type: Sequelize.STRING
      },
      MaTonGiao: {
        type: Sequelize.STRING
      },
      HoTenHS: {
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
      SDT: {
        type: Sequelize.STRING,
      },
      Email: {
        type: Sequelize.STRING,
      },
      HoTenCha: {
        type: Sequelize.STRING,
      },
      NamSinhCha: {
        type: Sequelize.DATE,
      },
      HoTenMe: {
        type: Sequelize.STRING,
      },
      NamSinhMe: {
        type: Sequelize.DATE,
      },
      Password: {
        type: Sequelize.STRING,
      },
      avatar: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('HocSinhs');
  }
};
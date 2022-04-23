'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('KiemTras', {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      MaGV: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      MaHS: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
        },
      MaMonHoc: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
        },
        KiemTra1: {
          type: Sequelize.INTEGER
        },
        KiemTra2: {
          type: Sequelize.INTEGER
        },
        KiemTra3: {
          type: Sequelize.INTEGER
        },
        KiemTraGiuaKy: {
          type: Sequelize.INTEGER
        },
        KiemTraCuoiKy: {
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
    await queryInterface.dropTable('KiemTras');
  }
};
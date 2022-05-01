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
      MaLop: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      MaMonHoc: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
        },
        KiemTra1: {
          type: Sequelize.DOUBLE
        },
        KiemTra2: {
          type: Sequelize.DOUBLE
        },
        KiemTra3: {
          type: Sequelize.DOUBLE
        },
        KiemTraCuoiKy: {
          type: Sequelize.DOUBLE
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
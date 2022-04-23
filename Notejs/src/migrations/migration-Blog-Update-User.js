module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('HocSinhs', 'avatar', {
                type: Sequelize.BLOB('long'),
                allowNull: true,
            })
        ])
    },

    down: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('HocSinhs', 'avatar', {
                type: Sequelize.STRING,
                allowNull: true,
            })
        ])
    }
};
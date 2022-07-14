'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      displayName: {
        type: Sequelize.STRING(225),
        allowNull: false,
      },
      email: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING(225),
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(225),
      },
      image: {
        type: Sequelize.STRING(255),
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};

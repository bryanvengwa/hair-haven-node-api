'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      slug: {
        type: Sequelize.STRING
      },
      unitPrice: {
        type: Sequelize.DECIMAL
      },
      inventory: {
        type: Sequelize.INTEGER
      },
      lastUpdate: {
        type: Sequelize.DATE
      },
      CollectionId: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      productType: {
        type: Sequelize.STRING
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};
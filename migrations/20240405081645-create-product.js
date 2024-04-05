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
        type: Sequelize.STRING
      },
      slug: {
        type: Sequelize.STRING
      },
      unit_price: {
        type: Sequelize.FLOAT
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
      product_type: {
        type: Sequelize.STRING
      },
      price_with_tax: {
        type: Sequelize.FLOAT
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
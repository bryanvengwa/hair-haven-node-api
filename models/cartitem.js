'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    static associate(models) {
      CartItem.belongsTo(models.Cart, { as: 'cart' });
      CartItem.belongsTo(models.Product);
    }
  }

  CartItem.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      cartId: DataTypes.UUID,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'CartItem',
    }
  );

  return CartItem;
};

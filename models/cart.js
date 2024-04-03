'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      // define association here
      Cart.hasMany(models.CartItem, { as: 'cartItems' });
    }
  }
  Cart.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Generate UUID automatically
        primaryKey: true,
      },
      createdAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Cart',
    }
  );
  return Cart;
};

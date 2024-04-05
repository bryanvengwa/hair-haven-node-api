'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    slug: DataTypes.STRING,
    unit_price: DataTypes.FLOAT,
    inventory: DataTypes.INTEGER,
    lastUpdate: DataTypes.DATE,
    CollectionId: DataTypes.INTEGER,
    image: DataTypes.STRING,
    product_type: DataTypes.STRING,
    price_with_tax: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
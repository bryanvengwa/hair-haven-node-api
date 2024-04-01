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
    description: DataTypes.TEXT,
    slug: DataTypes.STRING,
    unitPrice: DataTypes.DECIMAL,
    inventory: DataTypes.INTEGER,
    lastUpdate: DataTypes.DATE,
    CollectionId: DataTypes.INTEGER,
    image: DataTypes.STRING,
    productType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
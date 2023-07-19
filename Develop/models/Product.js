const { Model, DataTypes } = require('sequelize'),
      sequelize = require('../config/connection');


class Product extends Model {}

/**
 * @init
 * This method initializes the Product model
 * in Sequelize and defines five keys: id,
 * product_name, price, stock and category_id
 */
Product.init(
  {
    id: {
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true,
      validate: {
        is: /^\d+$/
      }
    },
    product_name: {
      type: DataTypes.STRING, 
      allowNull: false, 
      validate: {
        is: /^.+$/ 
      }
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), 
      allowNull: false, 
      validate: {
        isDecimal: true, 
        is: /^\d+(\.\d{1,2})?$/ 
      }
    },
    stock: {
      type: DataTypes.INTEGER, 
      allowNull: true, 
      validate: {
        is: /^\d*$/ 
      }
    },
    
    category_id: { 
      type: DataTypes.INTEGER,
      references: {
        model: 'categor*y', 
        key: 'category_id', 
        unique: true  
      },
    
      validate: {
        is: /^\d+$/ 
      }
    },
  },
  {
    
    sequelize,
    timestamps: false,
    freezeTableName: true, 
    underscored: true, 
    modelName: 'product', 
  }
);

module.exports = Product;

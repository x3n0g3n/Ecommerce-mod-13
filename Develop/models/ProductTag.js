const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      validate: {
        is: /^\d+$/,
        },
      },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'id',
        unique: true,
          },
    validate: {
      is: /^\d+$/,
      },
},
  tag_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'tag',
      key: 'tag_id',
      unique: true,
    },
  validate: {
    is: /^\d+$/,
      },
    },
  },
{
sequelize,
timestamps: false,
freezeTableName: true,
underscored: true,
modelName: 'product_tag',
}
);

module.exports = ProductTag;

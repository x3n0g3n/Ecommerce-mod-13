const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {   category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
         autoIncrement: true,
    validate: {
      is: /^\d+$/,
     },
      },
        category_name: {
          type: DataTypes.STRING,
          allowNull: false,
      validate: {
        is: /^.+$/,
      },
        },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;


const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
{
category_id: {
type: DataTypes.INTEGER,
primaryKey: true,
autoIncrement: true,
validate: {
is: /^\d+$/,
},
},
category_name: {
type: DataTypes.STRING,
allowNull: false,
validate: {
is: /^.+$/,
},
},
},
{
sequelize,
timestamps: false,
freezeTableName: true,
underscored: true,
modelName: 'category',
}
);

module.exports = Category;

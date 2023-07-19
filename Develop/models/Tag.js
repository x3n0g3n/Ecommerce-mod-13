const { Model, DataTypes } = require('sequelize'),
sequelize = require('../config/connection.js');
class Tag extends Model {}

/**
 * @init
 * This method initializes the Tag model
 * in Sequelize and defines two keys: tag_id
 * and tag_name
 */
Tag.init(
  {
    tag_id: {
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true,
      validate: {
        is: /^\d+$/l
      }
    },
    tag_name: {
      type: DataTypes.STRING, 
      allowNull: false, 
      validate: {
        is: /^.+$/ 
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class table_number extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  table_number.init({
    col: {
      type: DataTypes.ENUM,
      values: [
        'b',
        'i',
        'n',
        'g',
        'o'
      ],
    },
    position: {
      type: DataTypes.ENUM,
      values: [
        '1',
        '2',
        '3',
        '4',
        '5'
      ],
    },
    number     : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'table_number',
  });

  table_number.associate = function(models) {
    table_number.belongsTo(models.table, {
      onDelete: "CASCADE",
      foreignKey: "tableId",
    })
  }

  return table_number;
};
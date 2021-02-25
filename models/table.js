'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class table extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  table.init({
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'table',
  });

  table.associate = function(models) {
    table.belongsTo(models.users, {
      onDelete: "CASCADE",
      foreignKey: "userId",
    })
  }

  table.associate = function(models) {
    table.hasMany(models.table_number, {
      foreignKey: "tableId",
      as: "table_numbers",
    })
  }

  table.associate = function(models) {
    table.hasMany(models.winners, {
      foreignKey: "tableId",
      as: "winners",
    })
  }

  return table;
};
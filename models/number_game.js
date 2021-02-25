'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class number_game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  number_game.init({
    value: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'number_game',
  });

  number_game.associate = function(models) {
    number_game.belongsTo(models.round, {
      onDelete: "CASCADE",
      foreignKey: "roundId",
    })
  }

  return number_game;
};
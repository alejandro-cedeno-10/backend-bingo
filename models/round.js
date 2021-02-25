'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class round extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  round.init({
    game: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'round',
  });

  round.associate = function(models) {
    round.belongsTo(models.room, {
      onDelete: "CASCADE",
      foreignKey: "roomId",
    })
  }

  round.associate = function(models) {
    round.hasMany(models.number_game, {
      foreignKey: "roundId",
      as: "number_games",
    })
  }

  round.associate = function(models) {
    round.hasMany(models.winners, {
      foreignKey: "roundId",
      as: "winners",
    })
  }

  return round;
};
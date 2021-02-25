'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class winners extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  winners.init({
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'winners',
  });

  winners.associate = function(models) {
    winners.belongsTo(models.users, {
      onDelete: "CASCADE",
      foreignKey: "userId",
    })
  }

  winners.associate = function(models) {
    winners.belongsTo(models.round, {
      onDelete: "CASCADE",
      foreignKey: "roundId",
    })
  }

  winners.associate = function(models) {
    winners.belongsTo(models.table, {
      onDelete: "CASCADE",
      foreignKey: "tableId",
    })
  }

  winners.associate = function(models) {
    winners.belongsTo(models.reward, {
      onDelete: "CASCADE",
      foreignKey: "rewardId",
    })
  }


  return winners;
};
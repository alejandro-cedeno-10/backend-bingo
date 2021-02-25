'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reward extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  reward.init({
    descripcion: DataTypes.STRING(100)
  }, {
    sequelize,
    modelName: 'reward',
  });

  reward.associate = function(models) {
    reward.belongsTo(models.room, {
      onDelete: "CASCADE",
      foreignKey: "roomId",
    })
  }

  reward.associate = function(models) {
    reward.hasMany(models.winners, {
      foreignKey: "rewardId",
      as: "winners",
    })
  }

  return reward;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  users.init({
    email: DataTypes.STRING(100),
    name: DataTypes.STRING(100),
    lastname: DataTypes.STRING(100),
    password: DataTypes.STRING(100)
  }, {
    sequelize,
    modelName: 'users',
  });

  users.associate = function(models) {
    users.hasMany(models.room, {
      foreignKey: "userId",
      as: "rooms",
    })
  }

  users.associate = function(models) {
    users.hasMany(models.table, {
      foreignKey: "userId",
      as: "tables",
    })
  }

  users.associate = function(models) {
    users.hasMany(models.winners, {
      foreignKey: "userId",
      as: "winners",
    })
  } 

  return users;
};
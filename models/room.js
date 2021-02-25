'use strict';
const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  };
  room.init({
    //userId : DataTypes.INTEGER,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'users',
          key: 'id'
      },
      field: 'userId'
    },
    users_max: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'room',
  });

  room.associate = function(models) {
    room.belongsTo(models.users, {
      onDelete: "CASCADE",
      foreignKey: "id",
      sourceKey: 'userId'
    })
  }

  room.associate = function(models) {
    room.hasMany(models.reward, {
      foreignKey: "roomId",
      as: "rewards",
    })
  }

  room.associate = function(models) {
    room.hasMany(models.round, {
      foreignKey: "roomId",
      as: "rounds",
    })
  }

  return room;
};
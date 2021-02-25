'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('winners', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
          as: "userId",
        },
      },
      roundId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "rounds",
          key: "id",
          as: "roundId",
        },
      },
      tableId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "tables",
          key: "id",
          as: "tableId",
        },
      },
      rewardId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "rewards",
          key: "id",
          as: "rewardId",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('winners');
  }
};
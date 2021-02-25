'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    var DataTypes = require('sequelize/lib/data-types');
    await queryInterface.createTable('table_numbers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      col: {
        type: DataTypes.ENUM,
        values: [
            'b',
            'i',
            'n',
            'g',
            'o'
        ],
        defaultValue: null
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
        defaultValue: null
      },
      number: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('table_numbers');
  }
};
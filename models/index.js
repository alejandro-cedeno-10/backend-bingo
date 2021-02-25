'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const { Client } = require('pg');

const client = new Client({
  username: "mbjffjofvclkjt",
  password: "04ef660693dc0d6d5c1e162ae9a56ec67d14aa4c1014eebd3fd1ae551a5172e3",
  database: "d677aqsteobb8d",
  host: "ec2-18-204-74-74.compute-1.amazonaws.com",
  port : 5432,
  ssl: true,
  use_env_variable : "postgres://mbjffjofvclkjt:04ef660693dc0d6d5c1e162ae9a56ec67d14aa4c1014eebd3fd1ae551a5172e3@ec2-18-204-74-74.compute-1.amazonaws.com:5432/d677aqsteobb8d"
});

client.connect();

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;



module.exports = db;


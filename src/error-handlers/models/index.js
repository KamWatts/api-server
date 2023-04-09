require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');


let food = require('./food');
let clothes = require('./clothes');

const SQL_URL = process.env.SQL_URL || 'sqlite:memory';

const sequelize = new Sequelize(SQL_URL);

const foodModel = food(sequelize, DataTypes);
const clothesModel = clothes(sequelize, DataTypes);

module.exports = {
  sequelize,
  foodModel,
  clothesModel
};
// barrel index.js file
require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');


const food = require('./food');
const foodItem = require('./food-item');

const SQL_URL = process.env.SQL_URL || 'sqlite:memory';
const sequelize = new Sequelize(SQL_URL);


const foodModel = food(sequelize, DataTypes);
const foodItemModel = foodItem(sequelize, DataTypes);


foodModel.hasMany(foodItemModel, {foreignKey: 'foodId', sourceKey: 'id'});
foodItemModel.belongsTo(foodModel, {foreignKey: 'foodId', targetKey: 'id'}) 

module.exports = {
  sequelize,
  FoodItemModel: foodItemModel,
  FoodModel: foodModel
}

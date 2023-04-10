'use strict'
// barrel index.js file

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');


const food = require('./food');
const clothes = require('./clothes');

const SQL_URL = process.env.SQL_URL || 'sqlite:memory';

const sequelize = new Sequelize(SQL_URL);

const foodModel = food(sequelize, DataTypes);
const clothesModel = clothes(sequelize, DataTypes);


foodModel.hasMany(FoodItemModel, {foreignKey: 'foodId', sourceKey: 'id'});
FoodItemModel.belongsTo(foodModel, {foreignKey: 'id', targetKey: 'foodId'})

clothesModel.hasMany(ClothesItemModel, {foreignKey: clothesId, sourceKey: 'id'});
ClothesItemModel.belongsTo(clothesModel, {foreignKey: 'id', targetKey: 'clothesId'});

module.exports = {
  sequelize,
  FoodItemMode: foodModel,
  ClothesItemModel: clothesModel
};
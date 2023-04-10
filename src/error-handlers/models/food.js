'use strict'

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const SQL_URL = process.env.SQL_URL || 'sqlite:memory';
const sequilize = new Sequelize(SQL_URL);

const Food = sequilize.define('Food', {

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  price: {
    type: DataTypes.INTEGER,
    allowNull: true
  },

  vegetarian: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  }
});

module.exports = {
  sequelize,
  Food
}
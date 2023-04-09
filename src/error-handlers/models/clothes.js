'use strict'

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const SQL_URL = process.env.SQL_URL || 'sqlite:memory:';
const sequilize = new Sequelize(SQL_URL);

const Clothes = sequilize.define('Clothes', {

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  fabric: {
    type: DataTypes.ENUM('denim', 'spandex', 'dri-fit'),
    defaultValue: 'denim',
    allowNull: false
  },

  brand: {
    type: DataTypes.STRING,
    allowNull: false
  },

  pairs: {
    type: DataTypes.INTEGER,
    allowNull: true
  },

  clothesId: {
    type: DataTypes.Integer,
    allowNull: false
  }
})

modulize.exports = {
  sequilize,
  Clothes
};
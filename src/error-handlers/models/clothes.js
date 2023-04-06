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
    defaultValue: 'denim'
  },

  brand: {
    type: DataTypes.STRING
  },

  pairs: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
})

modulize.exports = {
  Sequilize,
  Clothes
};
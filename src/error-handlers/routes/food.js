'use strict'

const express = require('express');
const router = express.Router();

const { Food } = require('../models/food');

router.get('/', readFood);
router.get('/:id', readFood);
router.post('/', createFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);

async function readFood(request, response, next) {
  let data;
  if (request.params.id) {
    data = await Food.findByPk(request.params.id);
  } else {
    data = await Food.findAll();
  }
  response.json(data);
}

async function createFood(request, response, next) {
  const food = await Food.create({
    name: request.body.name,
    price: request.body.price,
    vegetarian: request.body.vegetarian,
  });
  response.json(food);
}

async function updateFood(request, response, next) {
  const id = request.params.id;
  const food = {
    name: request.body.name,
    price: request.body.price,
    vegetarian: request.body.vegetarian,
  }
  await Food.update(food, {
    where: {
      id: id,
    },
  });
  response.send(food);
}

async function deleteFood(request, response, next) {
  const id = request.params.id;
  await Food.destroy({
    where: {
      id: id,
    },
  });
  response.sendStatus(204);
}

module.exports = {
  router
};

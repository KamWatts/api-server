'use strict'

const express = require('express');
const router = express.Router();
const { Food } = require('../models/food');

async function createFood(request, response, next) {
  const newFoodItem = await Food.create(request.body);
  response.status(201).json(newFoodItem);
}

async function readAllFood(request, response, next) {
  let dataForFood = await Food.findAll();
  response.status(200).json(dataForFood)
}

async function readOneFood(request, response, next) {
  let dataForFood = await Food.findOne({where: {id: request.params.id}});
  response.status(200).json(dataForFood);
}

async function replaceFood(request, response, next) {
  let dataForFood = await Food.findOne({where: {id: request.params.id}});
  await dataForFood.update(request.body);
  response.status(200).json(dataForFood);
}

async function updateFood(request, response, next) {
 let dataForFood = await Food.findOne({where: {id: request.params.id}});
  for (const key in dataForFood.dataValues) {
    if (dataForFood[key] !== request.body[key] && request.body[key]) {
      await dataForFood.update({[key]: request.body[key]})
    }
  } 
  response.status(200).json(dataForFood);
  }


async function deleteFood(request, response, next) {
  let dataForFood = await Food.findOne({where: {id: request.params.id}});
  if (dataForFood) {
    await foodData.destroy()
  }
  response.status(200).send('Entry successfully removed from Database')
}

router.post('/', createFood)
router.get('/', readAllFood)
router.get('/:id', readOneFood)
router.put('/:id',  replaceFood)
router.patch('/:id', updateFood)
router.delete('/:id', deleteFood)

module.exports = {
  router
};

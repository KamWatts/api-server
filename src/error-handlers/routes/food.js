'use strict'

const express = require('express');
const router = express.Router();

router.get('/', readFood);
router.get('/:id', readFood);
router.post('/', createFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);

const data = [];

function readFood(request, response, next) {
  response.json(data);
}

function createFood(request, response, next) {
  const food = {
    name: request.body.name,
    price: request.body.price,
    vegeterian: request.body.vegeterian,
    id: data.length + 1
  }
  data.push(food);
  response.json(food);
}

function updateFood(request, response, next) {

  let id = request.params.id;
    const food = {
      name: request.body.name,
      price: request.body.price,
      vegeterian: request.body.vegeterian,
      id: id
    }
    // update the array  
    let index = id - 1;
    data[index] = food;
    response.send(food);
  }


function deleteFood(request, response, next) {

  let id = request.params.id;
    const food = {
      name: request.body.name,
      price: request.body.price,
      vegetarian: request.body.vegetarian,
      id: data.length + 1
    }
    data.push(id, food);
    response.json(id, food);
}
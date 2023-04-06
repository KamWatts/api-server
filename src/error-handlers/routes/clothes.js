'use strict'

const express = require('express');
const router = express.Router();

router.get('/', readClothes);
router.get('/:id', readClothes);
router.post('/', createClothes);
router.put('/:id', updateClothes);
router.delete('/:id', deleteClothes);

const data = [];

function readClothes(request, response, next) {
  response.json(data);
}

function createClothes(request, response, next) {
  const clothes = {
    name: request.body.name,
    fabric: request.body.fabric,
    brand: request.body.brand,
    pairs: request.body.pairs,
    id: data.length + 1
  }
  data.push(clothes);
  response.json(clothes);
}

function updateClothes(request, response, next) {

  let id = request.params.id;
    const clothes = {
      name: request.body.name,
      fabric: request.body.fabric,
      brand: request.body.brand,
      pairs: request.body.pairs,
      id: id
    }
    // update the array  
    let index = id - 1;
    data[index] = clothes;
    response.send(clothes);
  }


function deleteClothes(request, response, next) {

  let id = request.params.id;
    const clothes = {
      name: request.body.name,
      fabric: request.body.fabric,
      brand: request.body.brand,
      pairs: request.body.pairs,
      id: data.length + 1
    }
    data.push(id, clothes);
    response.json(id, clothes);
}
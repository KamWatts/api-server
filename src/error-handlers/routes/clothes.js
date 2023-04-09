'use strict'

const express = require('express');
const router = express.Router();

const { Clothes } = require('../models/clothes');

router.get('/', readClothes);
router.get('/:id', readClothes);
router.post('/', createClothes);
router.put('/:id', updateClothes);
router.delete('/:id', deleteClothes);

async function readClothes(request, response, next) {
  let data;
  if (request.params.id) {
    data = await Clothes.findByPk(request.params.id);
  } else {
    data = await Clothes.findAll();
  }
  response.json(data);
}

async function createClothes(request, response, next) {
  const clothes = {
    name: request.body.name,
    fabric: request.body.fabric,
    brand: request.body.brand,
    pairs: request.body.pairs,
  }
  const result = await Clothes.create(clothes);
  response.json(result);
}

async function updateClothes(request, response, next) {
  const id = request.params.id;
  const clothes = {
    name: request.body.name,
    fabric: request.body.fabric,
    brand: request.body.brand,
    pairs: request.body.pairs,
  }
  await Clothes.update(clothes, {
    where: {
      id: id,
    },
  });
  response.send(clothes);
}

async function deleteClothes(request, response, next) {
  const id = request.params.id;
  await Clothes.destroy({
    where: {
      id: id,
    },
  });
  response.sendStatus(204);
}

module.exports = {
  router
};
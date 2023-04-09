'use strict'

const { sequelize, Clothes, Food, foodModel, clothesModel } = require('../src/error-handlers/models');



beforeAll( async() => {
  await sequelize.sync();
});

afterAll( async() => {
  await sequelize.drop();
})

describe('Testing our data models', () => {
  test('Can create some food and clothes', async () => {
    let newFood = await Food({
        name: 'Spagetti',
        price: 2.00,
        vegetarian: true
      });
    })
  })

  describe('Testing our data models', () => {
    test('Can create some food and clothes', async () => {
      let newClothes= await Clothes({
          name: '401',
          fabric: true,
          brand: 'Levi',
          pairs: 3,
          clothesId: 1
        });
      })
    })
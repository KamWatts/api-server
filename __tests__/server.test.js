'use strict'

const supertest = require('supertest');
const server = require('../src/error-handlers/server');
const db1= require('../src/models/clothes.js');
const db2 = require('../src/models/food.js')
const request = supertest(server.app);


// beforeAll
beforeAll( async () => {
  await db1.sequelize.sync();
  await db2.sequelize.sync(); // connects and creates the table
})
// afterALL
afterAll( async () => {
  await db1.sequelize.drop();
  await db2.sequelize.drop();
})

describe('Testing our server routes', () => {
  test('404 bad route', async () => {
    let response = await request.get('/baaad-goat-route');
    expect(response.status).toEqual(404);
    expect(response.body).toEqual({});
  });
  test('404 bad method', async () => {
    let response = await request.patch('/clothes');
    expect(response.status).toEqual(404);
    expect(response.body).toEqual({})
  });
  test('200 for READ ALL clothes', async () => {
    let response = await request.get('/clothes');
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toBeTruthy({});
  })
  xtest('200 for READ ALL clothes', async () => {});
  xtest('200 for READ ONE cloth', async () => {});
  xtest('200 for UPDATE clothes', async () => {});
  xtest('200 for DELETE clothes', async () => {});
})
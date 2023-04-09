'use strict'

const supertest = require('supertest');
const server = require('../src/error-handlers/server');
const app = server.app;
// const db1= require('../src/models/clothes.js');
// const db2 = require('../src/models/food.js')
const handle500 = require('../src/error-handlers/error-handlers/500')
const request = require(supertest)(app);

// // beforeAll
// beforeAll( async () => {
//   await db1.sequelize.sync();
//   await db2.sequelize.sync(); // connects and creates the table
// })
// // afterALL
// afterAll( async () => {
//   await db1.sequelize.drop();
//   await db2.sequelize.drop();
// })

describe('Testing our server routes', () => {
  test('404 bad route', async () => {
    const response = await request.get('/baaad-goat-route');
    expect(response.status).toEqual(404);
  });
  test('404 bad method', async () => {
    let response = await request.put('/clothes');
    expect(response.status).toEqual(404);
  });
  test('500 for Internal Server Issues', async () => {
    const request = {};
    const response = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    const next = jest.fn();

    handle500(null, request, response, next);

    // let response = await request.get('/clothes');

    expect(response.status).toHaveBeenCalledWith(500);
    expect(response.json).toHaveBeenCalledWith({error: 'Internal Server Having Issues'});
  })

  test('Should respond with 200 status code', async () => {
    const name = "Any name";
    const response = await request.get(`/food?food=${food}`)
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({ name: 'Any name'});

  })
  // xtest('200 for READ ALL clothes', async () => {});
  // xtest('200 for READ ONE cloth', async () => {});
  // xtest('200 for UPDATE clothes', async () => {});
  // xtest('200 for DELETE clothes', async () => {});

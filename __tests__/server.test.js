'use strict';

const express = require('express');
const app = express();
app.use(express());

const supertest = require('supertest');

describe('Testing our server routes', () => {

  test('404 bad route', async () => {
    const response = await supertest(app).get('/bad-goat-route');
    expect(response.status).toEqual(404);
  });

  test('Should send 201 for successful POSTing', async () => {
    const req = {
      name: 'Tacos',
      price: 1.00,
      vegetarian: true
    }
    const response = await supertest(app).post('/food').send(req)
    expect(response.status).toEqual(201);
  });

  test('Should send 200 for successful GET', async () => {
    const response = await supertest(app).get('/food/anyName')
    expect(response.status).toEqual(200);
  });

  test('Should send 200 for DELETE', async () => {
    const response = await supertest(app).delete('/food/anyName')
    expect(response.status).toBe(200)
  });

  test('Should respond with 200 on successful PUT', async () => {
    const req = {
      name: 'Chicken Tikka Masala',
      price: 20.00, 
      vegetarian: true
    }
    const response = await supertest(app).put('/food/newEndPoint').send(req)
    expect(response.status).toBe(200)
  });

  test('Should respond with 200 for successful PATCH', async () => {
    const req = {
      name: 'Brisket pho',
      price: 10.00,
      vegetarian: true
    }
    const response = await supertest(app).patch(`/food/10`).send(req);
    expect(response.status).toBe(200);
  });
});

'use strict'

const logger = require('./logger');

describe( 'Test for the logger middleware', () => {
  test('This should return a response from logger middleware', () => {
    const request = {
      query: {},
    };
    const response = {};
    const next = jest.fn();
    logger(request, response, next);
    expect(next).toHaveBeenCalledTimes(1);
  });
});
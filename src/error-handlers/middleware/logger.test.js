'use strict'

const logger = require('./logger');

describe( 'Test for the logger', () => {
  test('Response from logger?', () => {
    const req = {
      query: {},
    };
    const res = {};
    const next = jest.fn();
    logger(request, response, next);
    expect(next).toHaveBeenCalled();
  });
});
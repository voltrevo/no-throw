'use strict';

/* global describe it */

var assert = require('assert');
var noThrow = require('../lib');

var sqrt = function(n) {
  if (n < 0) {
    throw new Error('Encountered a complication.');
  }

  return Math.sqrt(n);
};

describe('no-throw', function() {
  it('prevents an exception being thrown', function() {
    assert.deepEqual(
      noThrow(sqrt)(-1),
      {
        error: new Error('foo'),
        value: undefined
      }
    );
  });

  it('provides a value when an exception isn\'t thrown', function() {
    assert.deepEqual(
      noThrow(sqrt)(100),
      {
        error: undefined,
        value: 10
      }
    );
  });
});

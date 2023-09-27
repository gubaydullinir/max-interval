import getMaxInterval from '../getMaxInterval.js';

import assert from 'assert';

describe('[0, 0, 0, 0]', function() {
  it('should return 0', function() {
    assert.equal(getMaxInterval([0, 0, 0, 0]), 0);
  });
});

describe('[1, 1, 1, 1, 1]', function() {
  it('should return 5', function() {
    assert.equal(getMaxInterval([1, 1, 1, 1, 1,]), 5);
  });
});

describe('[1, 0, 1, 1, 0, 1]', function() {
  it('should return 3', function() {
    assert.equal(getMaxInterval([1, 0, 1, 1, 0, 1]), 3);
  });
});

describe('[1, 1, 0, 1, 1, 0, 1]', function() {
  it('should return 4', function() {
    assert.equal(getMaxInterval([1, 1, 0, 1, 1, 0, 1]), 4);
  });
})

describe('* [1, 1, 0, 1, 0, 1, 1, 1]', function() {
  it('should return 4', function() {
    assert.equal(getMaxInterval([1, 1, 0, 1, 0, 1, 1, 1]), 4);
  });
})

describe('[1, 1, 0, 1, 1, 1, 0, 1, 1]', function() {
  it('should return 5', function() {
    assert.equal(getMaxInterval([1, 1, 0, 1, 1, 1, 0, 1, 1]), 5);
  });
})

describe('[1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1]', function() {
  it('should return 5', function() {
    assert.equal(getMaxInterval([1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1]), 5);
  });
});


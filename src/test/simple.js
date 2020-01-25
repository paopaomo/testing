const { should, expect, assert } = require('chai');
const { add, multiple } = require('../math.js');

should();

add(2, 3).should.equal(5); // BDD
expect(add(2, 3)).to.equal(5);  // 介于两者之间
assert.equal(add(2, 3), 5); // TDD

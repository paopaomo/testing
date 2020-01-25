const { expect } = require('chai');
const { add, multiple } = require('../src/math.js');

describe('#math', () => {
    describe('add', () => {
        it('should return 5 when 2 + 3', () => {
            expect(add(2, 3)).to.equal(5);
        });
        it('should return -1 when 2 + -3', () => {
            expect(add(2, -3)).to.equal(-1);
        });
    });
    describe('multiple', () => {
        it('should return 6 when 2 * 3', () => {
            expect(multiple(2, 3)).to.equal(6);
        });
    });
});

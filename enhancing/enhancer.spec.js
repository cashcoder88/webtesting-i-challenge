const {repair} = require('./enhancer.js');
// test away!
describe('enhancer.js', () => {
    describe('repair()', () => {
        it('repairs durability to 100', () => {
            expect(repair({durability: 75}).durability).toBe(100);
            expect(repair({durability: -5}).durability).toBe(100);
        });
    });
});


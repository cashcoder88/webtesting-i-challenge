const {repair, succeed} = require('./enhancer.js');
// test away!
describe('enhancer.js', () => {
    describe('repair()', () => {
        it('repairs durability to 100', () => {
            expect(repair({durability: 75}).durability).toBe(100);
            expect(repair({durability: -5}).durability).toBe(100);
            expect(repair({durability: 101}).durability).toBe(100);
        });
    });

    describe('succeed()', () => {
        it('increases items enhancement + 1', () => {
            expect(succeed({enhancement: 5}).enhancement).toBe(6);
        });
    });
});


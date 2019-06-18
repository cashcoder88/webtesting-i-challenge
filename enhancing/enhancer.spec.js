const {repair, succeed, fail} = require('./enhancer.js');
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
            expect(succeed({enhancement: 19}).enhancement).toBe(20);
        });
        it("doesn't go past 20", () => {
            expect(succeed({enhancement: 20}).enhancement).toBe(20);
            expect(succeed({enhancement: 21}).enhancement).toBe(20);
        });
        it("durability doesn't change", () => {
            expect(succeed({enhancement: 13, durability: 60}).durability).toBe(60);
            expect(succeed({enhancement: 10, durability: 3}).durability).toBe(3);
        });
        it("enhancement doesn't go below 0", () => {
            expect(succeed({enhancement: -2}).enhancement).toBe(0);
            expect(succeed({enhancement: -5}).enhancement).toBe(0);
            expect(succeed({enhancement: 0}).enhancement).toBe(1);
        });
    });

    describe('fail()', () => {
        it('decreases durability by 5 if enhc is less than 15', () => {
            expect(fail({enhancement: 13, durability: 60}).durability).toBe(55);
            expect(fail({enhancement: -1, durability: 55}).durability).toBe(50);
        });
        it("durability doesn't go below 0 if enhance is less than 15", () => {
            expect(fail({enhancement: 13, durability: 3}).durability).toBe(0);
        })
        it("durability doesn't go below 0 if enhance is between than 15 and 16" , () => {
            expect(fail({enhancement: 15, durability: 3}).durability).toBe(0);
            expect(fail({enhancement: 16, durability: 3}).durability).toBe(0);
        })
        it("durability doesn't go below 0 if enhance is greater than 16" , () => {
            expect(fail({enhancement: 17, durability: 3}).durability).toBe(0);
            expect(fail({enhancement: 17, durability: 5}).durability).toBe(0);
        })
        it("If the item's enhancement level is greater than 16, the enhancement level decreases by 1", () => {
            expect(fail({enhancement: 20, durability: 3}).enhancement).toBe(19);
            expect(fail({enhancement: 18, durability: 10}).enhancement).toBe(17);
        })
    });
});


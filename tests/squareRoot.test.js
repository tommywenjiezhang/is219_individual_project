const  squareRoot = require('../basicCalculation/methods/squareRoot');

describe('Square Root of 4 is 2',()=>{
    test('Square Root of 4 is 2 ', () => {
      expect(squareRoot(4)).toBe(2);
    });
})

const sum = require('../basicCalculation/sum');


describe('adds 1 + 2 to equal 3',()=>{
  test('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3);
  });
})

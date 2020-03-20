const divide = require('../basicCalculation/methods/divide');


describe('divide 2 divided by  2 to equal 1',()=>{
  test('divide 2 divided by  2 to equal 1', () => {
      expect(divide(2, 2)).toBe(1);
  });
})

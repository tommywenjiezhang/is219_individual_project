const  square = require('../basicCalculation/methods/square');

describe('Square of 2 is 4 ',()=>{
  test('Square of 2 is 4 ', () => {
    expect(square(2)).toBe(4);
  });
})

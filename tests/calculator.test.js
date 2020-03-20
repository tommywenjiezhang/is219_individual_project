const Calculator = require('../basicCalculation/Calculator');

test('Calculator divide 2 by  2 to equal 1', () => {
    let Calc = new Calculator();
    expect(Calc.Divide(2, 2)).toBe(1);
    expect(Calc.Result).toBe(1);

});
test('Calculator Add 2 by  2 to equal 4', () => {
    let Calc = new Calculator();
    expect(Calc.Add(2, 2)).toBe(4);
    expect(Calc.Result).toBe(4);

});
test('Calculator Multiply 2 by  2 has a result equal to 4', () => {
    let Calc = new Calculator();
    expect(Calc.Multiply(2, 2)).toBe(4);
    expect(Calc.Result).toBe(4);

});

test('Calculator add array of 1,2,3,4 and get result 10', () => {
    let Calc = new Calculator();
    myarray = [1, 2, 3, 4]
    expect(Calc.sumList(myarray)).toBe(10);
    expect(Calc.Result).toBe(10);

});

test('Calculator square number 2 and get result 4', () => {
    let Calc = new Calculator();
    expect(Calc.square(2)).toBe(4);
    expect(Calc.Result).toBe(4);
})


test('Calculator square root number 4 and get result 2', () => {
    let Calc = new Calculator();
    expect(Calc.squareRoot(4)).toBe(2);
    expect(Calc.Result).toBe(2);
})
;
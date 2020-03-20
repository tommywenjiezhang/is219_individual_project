const sum = require('../sum');
const multiply = require('./multiply');
const divide = require('./divide');
const square = require('./square');
const squareRoot = require('./squareRoot')

class MathOperations {
    static sum(a, b) {
        return sum(a, b);
    }
    static product(a, b) {
        return multiply(a, b);
    }
    static quotient(a, b) {
        return divide(a, b);
    }
    static sumList(myarray = []) {
        let Result = 0;
        myarray.forEach(function (item) {
            Result = sum(Result, item);
        });
        return Result;
    }
    static square(a){
        return square(a)
    }
    static squareRoot(a){
        return squareRoot(a)
    }

}

module.exports = MathOperations;

const MathOperations = require('./methods/MathOperation');

/**
 * @constructor Calculator
 * @return Calculator
 */
class Calculator {
    /**
     * Returns the sum of two number
     * @param {number} a
     * @param {number} b
     * @return {number} sum
     */
    Add(a, b) {
        return this.Result = MathOperations.sum(a, b);
    }

    /**
     * Divides two number
     * @param {number} a
     * @param {number} b
     * @return {number} result
     */
    Divide(a, b) {
        return this.Result = MathOperations.quotient(a, b);
    }

    /**
     * Mutiply two number
     * @param {number} a
     * @param {number} b
     * @return {number} result
     */
    Multiply(a, b) {
        return this.Result = MathOperations.product(a, b);
    }

    /**
     * sum the lists of numbers
     * @param {array} myarray list of number
     * @return {number} sum
     */
    sumList(myarray) {
        return this.Result = MathOperations.sumList(myarray);
    }

    /**
     *Square a number
     * @param  {number} number to be square
     * @return {number} result
     */
    square(a){
        return this.Result = MathOperations.square(a)
    }

    /**
     * Sqaure root of number
     * @param {number} a
     * @return {number} result
     */
    squareRoot(a){
        return this.Result = MathOperations.squareRoot(a);
    }
}
module.exports = Calculator;
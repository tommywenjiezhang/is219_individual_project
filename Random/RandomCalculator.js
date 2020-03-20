let rangeTwo = require('./methods/rangeTwo')
let  gtl = require('./methods/generateRandomList')
let sr = require("./methods/selectRandom")
let Calculator  = require('../basicCalculation/Calculator')
let SeedRand= require("./methods/seedRandom")
let selectN = require('./methods/selectNitem')
const SeedRandomList = require("./methods/seedRandomList")

/**
 * @constructor RandomCalculator
 * @return  RandomCalculator
 * @extends Calculator
 */
class RandomCalculator extends Calculator{
    /**
     * @return {SeedRandom} seed - new Seed
     */
    seedRandom(){
        return new SeedRand();
    }

    /**
     *  seed  the data so that the function generates the same random list each time
     * @return {SeedRandomList} new SeedRandomList
     */
    seedRandomList(){
        return new SeedRandomList();
    }

    /**
     * Select N number of items or Select a random item from a list
     * @param  {arr} list - list of numbers to be choosed from
     * @param {number} [size] - desired random numbers size
     * @return {array|number} - list of random numbers from list or a random number from list
     */
    selectRandom(){
        switch(arguments.length){
            case 1:
            return sr(arguments[0])
                break;
            case 2:
            return selectN(arguments[0], arguments[1]);
            break;
            default:
                return null;
            break;
        }
    }

    /**
     * genrates random list or  Generate a random number without a seed between a range of two numbers - Both Integer and Decimal
     * @param {number} min - min of desired list
     * @param {number} max - max of desired list
     * @param {number} [size] - size of random numbers list to be generated
     * @return {array|number} - random list of random number or number to be generated
     */

    generateRand(args){
       if(arguments.length < 2){
           throw new Error("Invalid arguemtns")
       }
       else{
           switch(arguments.length){
               case 2:
                 return  rangeTwo(arguments[0], arguments[1])
               case 3:
                   return gtl(arguments[0],arguments[1], arguments[2]);
               default:
                   return null;
           }
       }
    }
}

module.exports = RandomCalculator;
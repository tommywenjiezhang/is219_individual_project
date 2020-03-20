const mo = require("../../basicCalculation/methods/MathOperation")
module.exports = function(std, smapleSize,z){
    return  z * (std / mo.squareRoot(smapleSize))
}
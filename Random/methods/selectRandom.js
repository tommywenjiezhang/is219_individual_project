let  rt = require('./rangeTwo')

module.exports = function(arr){
    let random =  rt(0,arr.length-1)
    return arr[random];
}
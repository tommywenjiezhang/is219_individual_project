const rt =  require('./rangeTwo')

module.exports = function(n, min, max){
        var newArr = [];
        for (let i = 0; i < n; i++) {
            let value = rt(min,max)
            newArr.push(value)
        }
        return newArr
}
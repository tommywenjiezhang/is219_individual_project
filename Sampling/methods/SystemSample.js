let mo = require('../../basicCalculation/methods/MathOperation');
let stats= require("../../Statistic/StatisticsOperation")

module.exports = function(arr,sampleSize,start){
    let system = Math.floor(arr.length / sampleSize)
    let sample = [];
    let temp = start
    if(system >= arr.length){
        let system = Math.floor(arr.length / sampleSize)
    }
    while(sample.length < sampleSize){
        let pick = arr[start]
        if(sample.indexOf(pick) === -1) {
            sample.push(pick)
        }
        start += system
        if(start >= arr.length-1){
            start = temp;
            temp++;
        }
        if(temp >= arr.length-1 ){
            temp = 0;
        }
    }
    return sample;
}




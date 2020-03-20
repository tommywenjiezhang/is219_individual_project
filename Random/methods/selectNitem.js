let selectRand = require("./selectRandom")
module.exports = function(arr,n){
    if(n >= arr.length){
        throw new Error("n CANNOT BE GREATER THAN ARRAY")
    }
    else{
        let newArr = [];
        for (let i = 0; i < n; i++) {
            let select =  selectRand(arr)
            newArr.push(select)
        }
        return newArr;
    }
}
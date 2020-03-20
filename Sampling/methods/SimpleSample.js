module.exports = function(arr,samplesize){
    if(samplesize >= arr.length){
        throw new Error("Sample size cannot be greater than arr size ")
    }
    else{
            let newArr = [];
            while(newArr.length < samplesize){
                let max = arr.length-1;
                let min = 0;
                let sample = Math.floor(Math.random() * (max - min) ) + min
                if(newArr.indexOf(arr[sample]) === -1){
                    newArr.push(arr[sample])
                }
            }
        return newArr;
        }
}
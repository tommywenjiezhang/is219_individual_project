module.exports = function(min, max){
    if(max <= min){
        throw new Error("max cannot samller or equal to min")
    }
    let anwser = Math.random() * (max- min) + min;
    if(Number.isInteger(min)  && Number.isInteger(max)) {
        return Math.round(anwser)
    }
    else{
        return anwser;
    }
}


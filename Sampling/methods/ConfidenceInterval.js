
const fs = require('fs');
const mo = require("../../basicCalculation/methods/MathOperation")
const Stats = require("../../Statistic/StatisticsOperation")
const stats = new Stats();

class ConfidenceInterval {
    static tDistribution(arr, ci) {
        let df = arr.length - 1;
        if (ci > 1) {
            throw new Error("Confidence Interval greater than 1")
        } else {
            let alpha = 1 - ci;
            let data = fs.readFileSync(__dirname + '/tDist.json');
            let tDisTable = JSON.parse(data);
            let tDist = null;
            let obj = tDisTable[df.toString()]
            for (let key in obj) {
                if (parseFloat(key) === alpha) {
                    tDist = obj[key]
                    break;
                }
            }
            let divideSamplebyStd = stats.stdev(arr) / mo.squareRoot(arr.length);
            let multiplyByT = 0;
            if (tDist) {
                multiplyByT = divideSamplebyStd * tDist;

            }
            let lowerSampleMean = stats.mean(arr) - multiplyByT;
            let upperSampleMean = stats.mean(arr) + multiplyByT;
            return [lowerSampleMean, upperSampleMean];
        }

    }

    static sampleSizeWithWidth(cL, W, p = 0.5) {
        if (cL > 1 || p > 1 || W > 1) {
            throw  new Error("Confidence interval cannot bigger than 1")
        } else {
            let zScore = ConfidenceInterval.zScorefromP(cL)
            let q = 1 - p;
            let E = W / 2;
            let pq = p * q
            let zAlpha = zScore / E;
            let answer = pq * mo.square(zAlpha)
            return answer;
        }

    }
    static sampleSizeStd(std, cL, E){
        let zScore = ConfidenceInterval.zScorefromP(cL)
        return mo.square((std * zScore )/ E)
    }

    static zScorefromP(cL) {
        if (cL > 1 ) {
            throw  new Error("Confidence interval cannot bigger than 1")
        } else {
            let lookup = (Math.abs(cL / 2) + 0.5).toFixed(3);
            let data = fs.readFileSync(__dirname + '/zScore.json');
            let zTable = JSON.parse(data);
            let zScore = null;
            for (let key in zTable) {
                let cur = zTable[key]
                for (let key2 in cur) {
                    let pointer = cur[key2];
                    // console.log( "Key  1: " + key + " kEY 2 :"  + key2 + " : "  + pointer.toFixed(3))
                    if (parseFloat(pointer).toFixed(3) == lookup) {
                        if (key.length > 1) {
                            zScore = key + key2.substr(key2.length - 1)
                        } else {
                            zScore = key + key2.substr(1)
                        }
                        break;
                    }
                }
            }
            if (zScore) {
                zScore = parseFloat(zScore)
                console.log(zScore)
            }
            return zScore
        }
    }

}
module.exports = ConfidenceInterval;
number = ConfidenceInterval.sampleSizeWithWidth(0.99,0.06)





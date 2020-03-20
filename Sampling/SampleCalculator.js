const srt = require('./methods/SimpleSample')
const Calculator = require("../basicCalculation/Calculator")
const ci = require('./methods/ConfidenceInterval')
const sysS= require("./methods/SystemSample")
const cochran = require("./methods/Cochran")
const  { jStat } = require('jstat');
const stats = require('../Statistic/StatisticsOperation')
const mE = require("./methods/marginofError")


/**
 * @constructor SamplingCalculator
 * @return samplingcalculator
 * @extends Calculator
 */
class SamplingCalculator extends Calculator{
    /**
     * simple ramdom sampling
     * @param {array} arr - list of number to be pick from
     * @param {number} samplesize - desired sample size
     * @return {array} sample - sample to be return
     */
    simpleRandomTest(arr,samplesize){
        return srt(arr,samplesize)
    }

    /**
     * Confidence Interval For a Sample
     * @param arr - list of sample
     * @param cL - Confidence level
     * @return {array} [upper, lower] - upper and lower confidence interval
     */
      confidenceInterval(arr, cL){
        return ci.tDistribution(arr,cL)
    }

    /**
     * Cochran’s Sample Size Formula
     * @param zScore - Z Score of Smaple
     * @param cL - Confidence Level of Sample
     * @param p - probability of Sample
     * @return {number} - Sample size
     */
     cochran(zScore, cL,p){
        return Math.ceil(cochran(zScore,p,1-cL))
    }

    /**
     * Find a Sample Size Given a Confidence Interval and Width (unknown population standard deviation)
     * @param W - Width of population
     * @param cL - Confidence Level
     * @param p - probability of Sample
     * @return {number} - sample size
     */
     clWidth(W,cL ,p= 0.5,){
        return Math.ceil(ci.sampleSizeWithWidth(cL,W,p))
    }

    /**
     *  Find a Sample Size Given a Confidence Interval and Width (known population standard deviation)
     * @param {number} cL - Confidence Level
     * @param {number} std - Standard Deviation
     * @param {number} E - Margin of Error
     * @return {number} - Sample size
     */
     sampleStd(cL,std ,E){
        return Math.ceil(ci.sampleSizeStd(std,cL,E))
    }

    /**
     * System Sampling
     * @param {number} arr - List of numbers to be picked
     * @param {number} size - desired sample size
     * @param {number} start - begining number
     * @return {array} - samples
     */
     systemSampling(arr,size,start){
        return sysS(arr,size,start)
    }

    /**
     * finds the margin of error of the sample given
     * @param {number} std - standard deviation
     * @param {number} size - size of sample
     * @param {number} z - z score of sample
     * @return {number} - margin of error
     */
     marginOfError(std,size,z){
        return mE(std,size,z);
    }
}

module.exports = SamplingCalculator;

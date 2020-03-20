var SmaplingCalculator = require('../Sampling/SampleCalculator')

beforeEach(() => {
    sm = new SmaplingCalculator();
});
describe('sample random  sampling', () => {
    var sourceArr= [3, 8, 11, 17, 19,8, 12, 13, 17, 20]
    test('arrary length', () => {
        var testArr = sm.simpleRandomTest(sourceArr,5)
        expect(testArr.length).toBe(5);
    });

    test('if there is duplicated', () => {
        var testArr = sm.simpleRandomTest(sourceArr,5)
        let isDuplicated = testArr.every((value) => testArr.indexOf(value) != testArr.lastIndexOf(value));
        expect(isDuplicated).toBeFalsy()
    });

    test('if ERROR is thrown when smaple size ', () => {
        var sourceArr= [3, 8, 11, 17, 19,8, 12, 13, 17, 20]
       expect(()=>{sm.simpleRandomTest(sourceArr,sourceArr.length+1)}).toThrowError("Sample size cannot be greater than arr size ")
    });
});


describe('confidence interval', () => {
    var sourceArr= [3, 8, 11, 17, 19,8, 12, 13, 17, 20]
    test('result test', () => {
        var result = sm.confidenceInterval(sourceArr,0.95)
        expect(result[0]).toBeCloseTo(12.8)
    });

    test('confidence level greater 1 reject', () => {
        expect(()=>{sm.confidenceInterval(sourceArr,2)}).toThrowError()
    });
});

describe('Cochran', () => {
    var sourceArr= [3, 8, 11, 17, 19,8, 12, 13, 17, 20]
    test('result test', () => {
        var result = sm.cochran(1.96,0.95,0.5)
        expect(result).toBeCloseTo(385)
    });
});

describe('unknown population standard deviation', () => {

    test('unknown population standard deviation', () => {
        var result = sm.clWidth(0.06,0.95,0.41)
        expect(result).toBeCloseTo(1033,2)
    });
});

describe('margin of error', () => {
    test('margin of error', () => {
        var result = sm.marginOfError(20,40,1.96)
        expect(result).toBeCloseTo(6.2,2)
    });
});

describe('known population standard deviation', () => {
    test('known population standard deviation', () => {
        var result =  sm.sampleStd(0.99,2.9,0.5)
        var test =     result >= 221 && result <= 230
        expect(test).toBeTruthy()
    });
});



describe('Systematic sampling', () => {
    test.each([
        [[3, 8, 11, 17, 19,8, 12, 13, 17, 20], 5, 2,5],
        [[3, 8, 11, 17, 19,8, 12, 13, 17, 20], 6, 1,6],
        [[3, 8, 11, 17, 19,8, 12, 13, 17, 20], 3, 4,3],
    ])('.systemSampling(%i,%i,%i)', (a, b, c, expected) => {
        expect(sm.systemSampling(a,b,c).length).toBe(expected)
    });

    test('if there is duplicated', () => {
        var sourceArr = [3, 8, 11, 17, 19,8, 12, 13, 17, 20]
        var testArr = sm.systemSampling(sourceArr,5,3)
        let isDuplicated = testArr.every((value) => testArr.indexOf(value) != testArr.lastIndexOf(value));
        expect(isDuplicated).toBeFalsy()
    });
});



const Sanitization = require('../basicCalculation/methods/Sanitization')


describe("Pass Number return True",
 ()=>{
     it('number check', () => {
         Sanitization.checkIfNumber(0).then(data => expect(data).toBeTruthy())
     });
 }
)

describe("pass string throw a TypeError not a number",() => {
    it('pass a string typeerror', ()=>{
        return expect(Sanitization.checkIfNumber("hello")).rejects.toThrow(new TypeError('Not a Number'))
    })
})



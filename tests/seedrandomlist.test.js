let Rand = require('../Random/RandomCalculator')
let rand

beforeEach(() => {
    rand = new Rand();
});

describe('Random list genereate n number',()=>{
    test('Random list genereate n number', () => {
       expect(rand.seedRandomList().generateRandomList(5,0,100).length).toBe(5)
    });
})

describe('result are the same before seeding and after seed',()=>{
    test('result are the same before seeding and after seed', () => {
        let srl =  rand.seedRandomList()
        srl.seed(3);
        expect(srl.generateRandomList(5,0,100)).toEqual(srl.generateRandomList(5,0,100))
    });
})
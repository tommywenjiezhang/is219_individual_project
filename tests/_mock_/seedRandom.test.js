const SeedRandom = require('../../Random/methods/seedRandom')
const mockSeed = jest.fn();
jest.mock('../../Random/methods/seedRandom', () => {
    // Works and lets you check for constructor calls:
    return jest.fn().mockImplementation(() => {
        return {seed:mockSeed};
    });
});

beforeEach(() => {
    SeedRandom.mockClear();
    mockSeed.mockClear();
});

it('class constructor', () => {
    const seedRandom = new SeedRandom();
    expect(SeedRandom).toHaveBeenCalledTimes(1);
});

it('check seed method is called ', () => {
    const fakeseed = 1;
    let seedRandom  = new SeedRandom();
    seedRandom.seed(1);
    expect(mockSeed.mock.calls[0][0]).toEqual(1);
});
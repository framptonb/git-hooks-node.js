const mult = require('../src/mult.js')

it('should return correct mult', () => {
    const result = mult(3, 5)
    expect(result).toBe(15)
})
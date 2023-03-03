const {getPercent} = require ('./index.js')

describe('function getPercent should:', ()=>{
    test('be defined',()=>{
        expect(getPercent(5, 100)).toBeDefined()
    })
  
    test('return pecent of another number correctly',()=>{
        expect(getPercent(10,100)).toBe(10)
    })
    test('return float persent of float number correctly',()=>{
        expect(getPercent(1.2,4.2)).toBeCloseTo(0.0504)
    })
    test('be falsy if one or both of value is not number',()=>{
        expect(getPercent("some string", 20)).toBeFalsy()
        expect(!!getPercent(true, true)).toBeFalsy()
        expect(getPercent(null, 6)).toBeFalsy()
    })

})

describe('function getPercent shouldn`t:', ()=>{
    test(' return percent if one or both values true or false',()=>{
        expect(getPercent(true, true)).not.toBe(0.01)
        expect(getPercent(true,100)).not.toBe(1)
        expect(getPercent(false,100)).not.toBe(0)
    })
    
})
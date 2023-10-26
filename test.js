/*


********************************
********************************
**                            **
**  DO NOT CHANGE THIS FILE!  **
**                            **
********************************
********************************


*/

const sumOfTwoNumbers = require('./sumOfTwoNumbers')
const repeatMyself = require('./repeatMyself')
const numberChecking = require('./numberChecking')

const it = (desc, fn) => {
    try {
        fn()
        console.log('\x1b[32m%s\x1b[0m', '\u2714 ' + desc)
    } catch (err) {
        console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + desc)
        //console.log(err)
    }
}

function assert(condition) {
    if (!condition) {
        throw new Error()
    }
}

console.log('\nsumOfTwoNumbers:')
it('should return the sum of two positive integers', () => {
    assert(sumOfTwoNumbers(1, 2) === 3)
})
it('should return the sum of two negative integers', () => {
    assert(sumOfTwoNumbers(-5, -10) === -15)
})

console.log('\nrepeatMyself:')
it('should work with simple words', () => {
    assert(repeatMyself('hello') === "hello!hello!!hello!!!hello!!!!hello!!!!!")
})
it('should work with complete sentences', () => {
    assert(repeatMyself('Hello World!') === "Hello World!!Hello World!!!Hello World!!!!Hello World!!!!!Hello World!!!!!!")
})
it('should work with empty string', () => {
    assert(repeatMyself("") === "!!!!!!!!!!!!!!!")
})

console.log('\nnumberChecking:')
it('should return \"sok\" from a not whole number that is greater than 10', () => {
    assert(numberChecking(10.1) === "sok")
})
it('should return \"sok\" from an integer greater than 10', () => {
    assert(numberChecking(11) === "sok")
})
it('should return 0 when a negative number is given', () => {
    assert(numberChecking(-1) === 0)
})
it('should return 0 when a not whole negative number is given', () => {
    assert(numberChecking(-0.1) === 0)
})
it('should return the number rounded down when 0 < number < 10 and the number is not an integer', () => {
    assert(numberChecking(9.9) === 9)
})
it ('should return the number when 0 < number < 10 and the number is an integer', () => {
    assert(numberChecking(5) === 5)
})
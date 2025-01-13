/*


**************************************
**************************************
**                                  **
**     DO NOT CHANGE THIS FILE!     **
**                                  **
**************************************
**************************************


*/

const sumOfTwoNumbers = require('./sumOfTwoNumbers')
const repeatMyself = require('./repeatMyself')
const numberChecking = require('./numberChecking')
const findAGoodCar = require('./findAGoodCar')

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

const carsArray = [
    {
        manufacturer: "Opel",
        yearOfManufacturing: 2008,
        km: 184000,
        price: 2000000
    },
    {
        manufacturer: "Opel",
        yearOfManufacturing: 2011,
        km: 212000,
        price: 4500000
    },
    {
        manufacturer: "Opel",
        yearOfManufacturing: 2004,
        km: 240000,
        price: 1700000
    },
    {
        manufacturer: "BMW",
        yearOfManufacturing: 2002,
        km: 280000,
        price: 2400000
    },
    {
        manufacturer: "BMW",
        yearOfManufacturing: 2014,
        km: 80000,
        price: 11000000
    },
    {
        manufacturer: "BMW",
        yearOfManufacturing: 2010,
        km: 140000,
        price: 8000000
    },
    {
        manufacturer: "Tesla",
        yearOfManufacturing: 2021,
        km: 110000,
        price: 27000000
    },
    {
        manufacturer: "Tesla",
        yearOfManufacturing: 2019,
        km: 40000,
        price: 31000000
    },
    {
        manufacturer: "Audi",
        yearOfManufacturing: 2001,
        km: 280000,
        price: 1200000
    },
    {
        manufacturer: "Audi",
        yearOfManufacturing: 2004,
        km: 289000,
        price: 1500000
    },
    {
        manufacturer: "Audi",
        yearOfManufacturing: 2007,
        km: 190000,
        price: 1750000
    },
    {
        manufacturer: "Audi",
        yearOfManufacturing: 2011,
        km: 212000,
        price: 3200000
    }
]

console.log('\nfindAGoodCar:')
it('should return null if no good car could be found', () => {
    assert(findAGoodCar(carsArray, { }) === null)
})
it('should return all BMW cars if all is matching the requirements', () => {
    assert(findAGoodCar(carsArray, {
        manufacturer: "BMW",
        yearOfManufacturing: 2000,
        price: 50000000,
        km: 500000
    }).length === 3)
})
it('should filter correctly by year of manufacturing', () => {
    assert(findAGoodCar(carsArray, {
        manufacturer: "Audi",
        yearOfManufacturing: 2005,
        price: 50000000,
        km: 500000
    }).length === 2)
    assert(findAGoodCar(carsArray, {
        manufacturer: "Audi",
        yearOfManufacturing: 2004,
        price: 50000000,
        km: 500000
    }).length === 3)
})
it('should filter correctly by price', () => {
    assert(findAGoodCar(carsArray, {
        manufacturer: "Tesla",
        yearOfManufacturing: 2015,
        price: 30000000,
        km: 5000000
    }).length === 1)
    assert(findAGoodCar(carsArray, {
        manufacturer: "Tesla",
        yearOfManufacturing: 2015,
        price: 31000000,
        km: 5000000
    }).length === 2)
})
it('should filter correctly by kilometers', () => {
    assert(findAGoodCar(carsArray, {
        manufacturer: "Opel",
        yearOfManufacturing: 2000,
        price: 30000000,
        km: 212000
    }).length === 1)
    assert(findAGoodCar(carsArray, {
        manufacturer: "Opel",
        yearOfManufacturing: 2000,
        price: 30000000,
        km: 212001
    }).length === 2)
})
it('should return one car if only one is matching the requirements', () => {
    assert(findAGoodCar(carsArray, {
        manufacturer: "Audi",
        yearOfManufacturing: 2004,
        price: 1800000,
        km: 200000
    }).length === 1)
})
it('should return two cars if two cars is matching the requirements', () => {
    assert(findAGoodCar(carsArray, {
        manufacturer: "Audi",
        yearOfManufacturing: 2001,
        price: 1500000,
        km: 300000
    }).length === 2)
})

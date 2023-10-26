# Description
You have to complete 4 functions, in 4 different files:  
- sumOfTwoNumbers -> `sumOfTwoNumbers.js`  
- repeatMyself -> `repeatMyself.js`  
- numberChecking -> `numberChecking.js`
- findAGoodCar -> `findAGoodCar.js`

Only write in the listed js files. Do not change any starter code.

Each function should return a value, depending on the task. 

You can run some built-in tests with the `node test.js` command.  
You can run the js files independently with the `node filename.js` command.


# sumOfTwoNumbers
Write a function, that has number 2 parameters: `num1` and `num2`.  
The function should return the sum of the 2 parameters.  
The function always gets 2 numbers for arguments, no need to check those.

examples:

`sumOfTwoNumbers(1, 2)` should return `3`  
`sumOfTwoNumbers(-2, -4)` should return `-6`

# repeatMyself
Write a function that has 1 string parameter: `string`.  
You should return the string 5 times, concatenated, with increasing amount of exclamation marks added at the end of each sentence.  
It should work with empty strings, too.

examples:

`repeatMyself("hello")` should return `"hello!hello!!hello!!!hello!!!!hello!!!!!"`  
`repeatMyself("hi!")` should return `"hi!!hi!!!hi!!!!hi!!!!!hi!!!!!!"`  
`repeatMyself("")` should return `"!!!!!!!!!!!!!!!"`

# numberChecking
Write a function that has 1 parameter: `number`.  
If the value of the parameter is a number that is greater than 10, you should return `"sok"`.  
If the value of the parameter is a negative number, you should return `0`.  
If the value of the parameter is not a whole number, you should return that number rounded down.

examples:

`numberChecking(15)` should return `"sok"`  
`numberChecking(4.5)` should return `4`  
`numberChecking(-111)` should return `0`

# findAGoodCar
Write a function that has 2 parameters: `cars` and `expectations`.  
The `cars` parameter is an array of car objects.  
The `expectations` parameter is an object.

The function should check the `cars` array, if it has any objects, that are meeting the expectations of the `expectations` object.  
We can say, that a car is meeting the expectations, and is a good car, if the car:  
- has the same `manufacturer` as the expectations object 
- has been made in the same year, or later, as the `yearOfManufacturing` from the expectations object  
- has lesser km's of running, than the `km` from the expectations object  
- is the same price, or cheaper, than the `price` from the expectations object 

If the function finds no good cars, it should return `null` instead of an empty array.  

example of the cars array:  
```
[
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
    }
]
```

example of the expectations object:
```
{
    manufacturer: "Opel",
    yearOfManufacturing: 2000,
    price: 30000000,
    km: 212000
}
```


running example:
```
findAGoodCar(carsArray, {
    manufacturer: "Audi",
    yearOfManufacturing: 2004,
    price: 1800000,
    km: 325000
})
```

should return with an array of 2 objects:
```
[
  {
    manufacturer: 'Audi',
    yearOfManufacturing: 2004,
    km: 289000,
    price: 1500000
  },
  {
    manufacturer: 'Audi',
    yearOfManufacturing: 2007,
    km: 190000,
    price: 1750000
  }
]
```
```
***
```

example of no good cars:
```
findAGoodCar(carsArray, {
    manufacturer: "Audi",
    yearOfManufacturing: 2004,
    price: 18000,
    km: 32500
})
```
should return `null`
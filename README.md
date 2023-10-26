# Description
You have to complete 4 functions, in 4 different files:  
-sumOfTwoNumbers -> `sumOfTwoNumbers.js`  
-repeatMyself -> `repeatMyself.js`  
-numberChecking -> `numberChecking.js`

Only write in the listed js files. Do not change any starter code.

Each function should return a value, depending on the task. 

You can run some built-in tests with the `node test.js` command.  
You can run the js files independently with the `node filename.js` command.


# sumOfTwoNumbers
Write a function, that has 2 parameters: `num1` and `num2`.  
The function should return the sum of the 2 parameters.  
The function always gets 2 numbers for arguments, no need to check those.

examples:

`sumOfTwoNumbers(1, 2)` should return `3`  
`sumOfTwoNumbers(-2, -4)` should return `-6`

# repeatMyself
Write a function that has 1 parameter: `string`.  
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
We can say, that a car is a good car, if the car:  
- has the same `manufacturer` as the expectations  
- has been made in the same year, or later, as the `yearOfManufacturing` from the expectations object  
- has lesser km's of running, than the `km` from the expectations object  
- is the same price, or cheaper, than the `price` from the expectations object  

example of the cars array:  
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
        ...
    ]
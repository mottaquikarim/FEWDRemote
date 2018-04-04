const makeMadLib = (adj, nat, person) => {
    const madlib = `Pizza was invented by a(n) ${adj} ${nat} 
chef named ${person}.`

    return madlib;
}

const F = 32;
const C = (F - 32) / 1.8;

console.log(C)

const fToC = (F) => {
    const C = (F - 32) / 1.8;
    
    return C;
}

console.log(fToC(32)) // expect 0
console.log(fToC(212)) // expect 100

/******************
Calculate how old you will be in N years

This function will tell you your age in N years

takes in two args, ageNow and numYears
should return a number that tells you how old you'll be in numYears
if that number is > 100, should return NaN
if invalid input given, return -1
******************/

function myAge( ageNow, numYears ) {
    return ageNow + numYears;
}

console.log(myAge(5, 10)) // 15
console.log(myAge(35, 10)) // 45


/******************
Concatenate Strings

Concatenating string variables

- Create a function called myConcatenate that takes 3 arguments
    * Create an argument called firstStr
    * Create a second argument called secondStr
    * Create a third argument called thridStr
- Concatenate all three arguments in a variable called mySentence
    * console out mySentence variable
- Call myConcatenate function
******************/

function myConcatenate( firstStr, secondStr, thirdStr ) {
    const mySentence = `${firstStr} ${secondStr} ${thirdStr}`;

    return mySentence;
}

console.log(myConcatenate('I', 'am', 'iron man')); // 'I am iron man'

function myConcatenate2( firstStr, secondStr, thirdStr ) {
    const mySentence = firstStr + " " + secondStr + " " + thirdStr;

    return mySentence;
}

console.log(myConcatenate2('I', 'am', 'iron man')); // 'I am iron man'



/******************
Subtract Function

Write a subtract function

This function will take two numbers and subtract them
Ensure that both of the inputs are numbers
******************/

function subtract(a = 0, b = 0, c) {
    const diff = a - b;
    
    return diff;
}

console.log(subtract(1,2))
console.log(subtract(10,2))
console.log(subtract())

/******************
Area of A Circle

Write a function called areaOfaCircle()

The function will calculate the area of circle
It will take one argument which will be the radius
This is the formula to calculate the area of a circle:
A = π * r^2, where is π is Pi and r is the radius squared
******************/


function areaOfaCircle(radius = 1){
    const area = Math.PI * radius ** 2;
    return area;
}    

console.log(areaOfaCircle(1)); // π
console.log(areaOfaCircle(2)); // 12.56
console.log(areaOfaCircle(10)); // 314

console.log(Math.floor(1.23456));
console.log(Math.floor(1.99999));

// write a function that takes as parameter
// N = which reprents precision and num which is
// decimal number
// it should output decimal to that precision

const toPrec = (num, N=1) => {
    
}

console.log(toPrec(1.23456, 2)); // 1.23
console.log(toPrec(1.23456, 3)); // 1.234








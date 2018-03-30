/*
string
number
boolean
undefined
null
*/

// string
console.log('hello, wrold!')

// number
console.log(3.14159)

// boolean
console.log(true)
console.log(false)

console.log(typeof 'hello wrold') 
// -> the typeof operator gives us back a STRING
// which represents the datatype of our value
console.log(typeof 15) // "number"
console.log(typeof true)
console.log(typeof console.log)
console.log(typeof typeof 15)

// there are two ways to declare a variable
const a = 1;
let b = 2;

console.log('a is...', a)
console.log('b is...', b) // 2

b = 4;
console.log('b is...', b) // 4

// cannot do:
// let b = 6 BECAUSE WE *ALREADY* DECLARED B WITH A LET BEFORE
b = 6;

const c = 'value'; // consts MUST have a datatype set when declared
console.log(c);	

let d;
console.log(d);
console.log(typeof d);

// the undefined datatype is a variable that has been
// declared but NOT defined

let e = null; // e is a variable that has been declared
			  // AND defined, but it's definition is
			  // that it is empty...


const hiMyNameIs = 'Slim Shady'; // preferred, camelCase
const hi_my_name_is = 'Slim Shady'; // frowned upon, snake_case

const $a = 'look ma this is a valid javascript variable name';
let $a$ = 4;
let __a__ = 5;
let $_a = 6;



const num = 4;
const sum = Math.floor(10*(0.1 + 0.2));
console.log(sum);

console.log(4 % 2); // % operator is... remainder
console.log(3 ** 2); // ** operator is... power of

// to raise to the power in javascript in the stone age...
const sq = Math.pow(3, 2);
const sq_root = Math.sqrt(3);

console.log(sq, sq_root)


console.log(Math.random())
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())


const adj = "bad";
const longString = "this is a " + adj + " string"
console.log(longString)

const adj2 = "super";

const longString2 = `this is a ${adj2} string`;
console.log(longString2)






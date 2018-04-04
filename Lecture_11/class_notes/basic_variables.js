const variable = 1;
console.log(variable);

let foo = 'bar';
console.log(foo)

// variable = 5;  // cannot reassign constants!!
console.log(variable)

foo = 'baz';
console.log(foo)

console.log(typeof 'foo')
console.log(typeof 1)
console.log(typeof true)

/*console.log(someNumber) // we are trying to work with a variable
                        // that has never been defined/declared etc*/
                        
console.log(typeof someNumber) // typeof adds some "magic" where variables
                               // that have never been defined dont throw err
                               

const a = '1';

const sum = a + 1; // 2

console.log(typeof sum)

const str1 = 'a';
const str2 = "a";
const str3 = `a`;

console.log(str1, str2, str3)

const placeholder = '__\'LOLHELLO__'

// these are backticks, fam
// find them above the left hand tab button on your
// keyboard
const sentence = `This is a ${placeholder} sentence`
console.log(sentence)















# Lecture 10: Variables and Functions

-

Welcome to Lecture 10! Here's a brief breakdown of today's class.
![foo](https://media3.giphy.com/media/lXiRLb0xFzmreM8k8/giphy.gif)

-

#### Learning Objectives
1. Get really good at writing JavaScript functions
2. Understand the concept of scope, returns, and params
3. Understand **why** functions are useful and therefore important

-

#### Stretch Goals
What are **objects** and how are they manifested in javascript?

-

#### Rundown
Ok game time.

-

#### [Warmup](#warmup)

-

#### [Types of Variables](#types-of-variables)

-

#### [Functions and Conditionals](#functions-and-conditionals)
---
# Warmup

-



-

#### [JS Global Notes](http://samantha.fewd.us/#fork/mottaquikarim/FEWD113_JS_Functions) | [LIVE Instructor View](http://samantha.fewd.us/#broadcast/mottaquikarim/FEWD113_JS_Functions)
<p></p>
Let's begin with some review problems.

-

#### Exercises

-

#### [PSET - Warmup](http://samantha.fewd.us/#fork/mottaquikarim/FEWD629_JavaScript_Basics_Warmup) | [LIVE Instructor Notes](http://samantha.fewd.us/#broadcast/mottaquikarim/FEWD629_JavaScript_Basics_Warmup)

-

#### [PSET - Functions](http://samantha.fewd.us/#fork/mottaquikarim/Functions_Practice) | [LIVE Instructor Notes](http://samantha.fewd.us/#broadcast/mottaquikarim/Functions_Practice)
<p></p>

-

#### Variable Types
There are exactly 5 primitive types in javascript:
3. **number**
4. **string**
5. **boolean**
1. **undefined**
2. **null**
And one non-primitive type:
* **object**
Additionally, there are a few **types** in javascript as well:
1. **number**
2. **string**
3. **boolean**
4. **undefined**
5. **object**
6. **function**
Curiously, **null** is defined as an object and functions, which are objects, have a unique type.
Together, these values in combination with **operators** define all that is javascript. 
---
# Types of Variables

-



-

#### [JS Global Notes](http://samantha.fewd.us/#fork/mottaquikarim/FEWD113_JS_Functions) | [LIVE Instructor View](http://samantha.fewd.us/#broadcast/mottaquikarim/FEWD113_JS_Functions)

-

#### Exercise
We want to learn enough javascript to be able to solve the following PSET.

-

#### [Basic Vars Review](http://samantha.fewd.us/#fork/mottaquikarim/Basic_Vars_Review) | [LIVE Instructor View](http://samantha.fewd.us/#broadcast/mottaquikarim/Basic_Vars_Review)
This will help you get your fingers warm re: simple javascript variable declarations.

-

#### Definitions
A variable type is a way to classify the different kinds of data we can save to a variable. There are exactly 6 types of variables:

-

#### Primitives
* `undefined`
* `null`
* boolean
* number
* string

-

#### Non Primitive
* Object

-

### Primitives
A Primitive type is a most basic bit of information that you can store. For example, a number is a primitive because it cannot be made up of any of the other types of variables
<strong>Alternate definition</strong>: Think of this as an atom -- atoms are atoms because we cannot break them down into any more basic bits, same goes for primitives

-

#### `undefined`
Undefined is the default state of any variable. Basically means the variable is empty or has not yet been assigned a value, primitive or otherwise

-

#### `null`
The null variable is different from the `undefined` type, but only subtly so.
1. the `null` type is assigned to a variable, but its "value" is empty.
2. the `undefined` type is by default the value of each variable that is declared but not defined
3. &#35;esoteric
**[Example](http://fewd.us/howdoi/#/problem/5131)**

-

#### Booleans
True or false. Basically.
```javascript
var myBooleanValue = true; // true
var myBooleanValueThatIsFalse = false; // false
console.log( typeof myBooleanValue );
```

-

#### Numbers
Numeric values that can be operated upon via the standard rules of arithmetic.
```javascript
var myNumber = 1;
var pi = 3.14159; // ...approximately
```

-

#### Strings
This one is interesting, we use this to represent text. Anything between the quotations (double or single, doesn't matter as long as you are consistent) is treated as a number.
So...
```javascript
var myName = 'Taq Karim';
var dudeThisIsAString = '105';
var doubleQuotesRCool2 = "Look ma! I'm double quoted";
```

-

### Non-Primitives or: how I learned to stop worrying and Love the Object.
Objects are the bees-knees yo.
<div>Seriously.</div>
<strong>Objects are a collection of properties where each property is a primitive type</strong>.

-

#### In other words...
```javascript
// just primitives
var someNumber = 1;
var someBool = false;
var someNullItem = null;
// as an object...
var myObject = {
	someNumber: 1
	, someBool: false
	, someNullItem: null
}; // notice the use of ":" instead of "="
// to access these items:
console.log( myObject.someNumber );
console.log( myObject.someBool );
```
---
# Functions and Conditionals

-

Let's learn to actually do stuff with javascript now. Functions and conditionals well help us automate programming tasks and also build in decision making capabilities into our programs.

-

#### [JS Global Notes](http://samantha.fewd.us/#fork/mottaquikarim/FEWD113_JS_Functions) | [LIVE Instructor View](http://samantha.fewd.us/#broadcast/mottaquikarim/FEWD113_JS_Functions)

-

#### Learning Objectives
1. Understand how to use functions to abstract away common coding tasks
2. Use conditionals to build in decision making into our code.

-

#### Exercises
The following PSET contains 10 problems. 

-

#### [PSET - Functions](http://samantha.fewd.us/#fork/mottaquikarim/Functions_Practice) | [LIVE Instructor Notes](http://samantha.fewd.us/#broadcast/mottaquikarim/Functions_Practice)
We will attempt to solve some or MOST of them.

-

#### [PSET - Conditionals](http://samantha.fewd.us/#fork/mottaquikarim/Conditionals) | [LIVE Instructor Notes](http://samantha.fewd.us/#broadcast/mottaquikarim/Conditionals)
Try to solve all of these

-

#### [Problem - Calculate Grade](http://samantha.fewd.us/#fork/mottaquikarim/Calculate_Grade) | [LIVE Instructor Notes](http://samantha.fewd.us/#broadcast/mottaquikarim/Calculate_Grade)
This one is more difficult, try it out though!

-

#### Functions
Functions are essentially actions. We use functions to save a set of `instructions` that we can tell javascript to use over and over again. Functions have names, just like variables, but they hold more than just primitive values.

-

#### Example
This is a function declaration.
```javascript
function doSomething() {
	alert('doing something!');
}
```
Here is how we would call that function
```javascript
// copying over last code snippet for convenience
function doSomething() {
	alert('doing something!');
}
// calling it now
doSomething();
```

-

#### Alternate way to do this
```javascript
var doSomething = function() {
	alert('doing something!');
}
// call it
doSomething();
```

-

#### Conditionals
Used do perform logic

-

### Rundown
<a>JavaScript Logical Operators</a>
<ul>
    <li>`===`</li>
    <li>`!==`</li>
    <li>`>`</li>
    <li>`<`</li>
    <li>`>=`</li>
    <li>`<=`</li>
    <li>`&&`</li>
    <li>`||`</li>
    <li>`!`</li>
</ul>
```js
// Comparison operators
// you can evaluate a situation by comparing one value in the script
// to what you expect it might be
// the result will be a boolean: true or false
/*
 *  the strict equality checking operator
 *  SYMBOL: ===
 */
var three = 3;
var equalityCheck = ( three === 3 );
console.log( 'three === 3', equalityCheck );
// note that equalityCheck, and ALL OTHER COMPARISON OPERATORS
// evaluate to booleans
console.log( 'typeof equalityCheck', typeof equalityCheck );
var equalityCheck2 = ( three === '3' ); // false because three is Number
                                       // but '3' is a string
console.log( "( three === '3' )", equalityCheck2 );
// ALWAYS USE THE STRICT EQUALITY OPERATOR!!
/*
 *  the strict NOT EQUAL checking operator
 *  SYMBOL: !==
 */
var notEqualityCheck = ( three !== 4 ); // should be true
var notEqualityCheck2 = ( three !== 3 ); // should be false;
console.log( '( three !== 4 )', notEqualityCheck );
console.log( '( three !== 3 )', notEqualityCheck2 );
/*
 *  the greater than operator
 *  SYMBOL: >
 */
var greaterThan = ( three > 4 ); // returns false
var greaterThan2 = ( three > 2 ); // true
console.log( '( three > 4 )', greaterThan );
console.log( '( three > 2 )', greaterThan2 );
/*
 *  the less than operator
 *  SYMBOL: <
 */
var lessThan = ( three < 2 ); // returns false
var lessThan2 = ( three < 5 ); // true
console.log( '(three < 2)', lessThan );
console.log( '(three < 5)', lessThan2 );
 
/*
 *  the greater than or equal to operator
 *  SYMBOL: >=
 */ 
var greaterThanOrEqualTo = ( three >= 4 ); // false
var greaterThanOrEqualTo2 = ( three >= 3 ); // true
console.log( '( three >= 4 )', greaterThanOrEqualTo );
console.log( '( three >= 3 )', greaterThanOrEqualTo2 );
/*
 *  the less than or equal to operator
 *  SYMBOL: <=
 */ 
var lessThanOrEqualTo = ( three <= 2 ); // false
var lessThanOrEqualTo2 = ( three <= 3 ); // true
console.log( '( three <= 2 )', lessThanOrEqualTo );
console.log( '( three <= 3 )', lessThanOrEqualTo2 );
/*
 *  LOGICAL OPERATORS
 *  logical operators allow you to compare the results of more than one
 *  comparison operator
 *  TYPES: '&&', '||'
 */ 
/*
 *  the AND operator
 *  SYMBOL: &&
 *  returns true only when both expressions evaluate to true
 */ 
var andOp = ((2 < 5) && (3 >=2)); // is 2 less than five AND
                                  // is 3 greater than or equal to 2
console.log( '((2 < 5) && (3 >=2))', andOp );
console.log( 'typeof andOp', andOp );
// NOTE, we can string together as many ANDs as we need...
/*
 *  the OR operator
 *  SYMBOL: ||
 *  returns true when ONE of the expressions are true
 */ 
var orOp = ((2 < 5) || (2 < 1)); // if EITHER one of these exprs are true
                                 // then will evaluate to true
console.log( '((2 < 5) || (2 < 1))', orOp );
// NOTE, we can string together as many ORs as we need...
/*
 *  the NOT operator
 *  SYMBOL: !
 *  returns opposite of evaluated expression
 */ 
var notOp = !(2 < 1);
console.log( '!(2 < 1)', notOp );
// Complete example
function checkNumber () {
    
    var n = prompt("Enter a number", "5")
        , entered = "You entered a number between"; 
    if (n >= 1 && n < 10) {
        alert(entered + " 0 and 10");
    }
    else if (n >= 10 && n < 20) {
        alert(entered + " 9 and 20");
    }
    else if (n >= 20 && n < 30) { 
        alert(entered + " 19 and 30");
    }
    else if (n >= 30 && n < 40) {
        alert(entered + " 29 and 40");
    }
    else if (n >= 40 && n <= 100) {
        alert(entered + " 39 and 100");
    }
    else if (n < 1 || n > 100) {
        alert("You entered a number less than 1 or greater than 100");
    }
    else {
        alert("You did not enter a number!");
      }
}
```
<a>The conditional block</a>
<ul>
    <li>the `if` statement</li>
    <li>the `if/else` statement</li>
    <li>the `if/else if/else` statement</li>
</ul>
```js
// the if..else statement check a condition
// if it resolves to true the first code block is run
// if the condition resolved to false the second code block is run instead
var pass = 50    // pass mark
    , score = 75   // current score
    , msg;   // message
    
// select message to write based on score    
if ( score >= pass ) {     
    // conditional statement
    // if code block
    // anything in here will be run if
    // the stuff in the (...) evaluates to true
    msg = "Congratulations you passed!";  
}    
else {  // else code block; if the obove is NOT true then...
    msg = " Try again :( ";  
}
// note this example of how we can use the if/else
// to set the value of a variable
console.log( msg ); 
/*
 *  the if/else if/else block
 */
var passingGrade;
if ( score < 50 ) {
    passingGrade = "F";
}
else if ( score < 60 ) {
    passingGrade = "D";
}
else if ( score < 70 ) {
    passingGrade = "C";
}
else if ( score < 80 ) {
    passingGrade = "B";
}
else if ( score < 90 ) {
    passingGrade = "A"
}
else {
    passingGrade = "A+";
}
console.log( "Your grade is: ", passingGrade );
    
    
    
```
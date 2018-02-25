# Lecture 12: Conditionals

-

Welcome to Lecture 12! Here is a brief breakdown of class today:
![conditionals](https://media1.giphy.com/media/AGGz7y0rCYxdS/giphy.gif)

-

## Learning Objectives
1. Learn javascript control flow. 
2. Use conditionals to write programs that can make decisions

-

## Last Class Notes
Here are the **[notes from last class](http://samantha.fewd.us/#broadcast/mottaquikarim/fewd627_11-notes)**.

-

## Today's Notes
Here are the **[notes from TODAY's class](http://samantha.fewd.us/#broadcast/mottaquikarim/fewd627_12-notes)**.

-

## Warm up
1. **[Problem 1](http://samantha.fewd.us/#fork/mottaquikarim/NYCDA_func_scope)**
2. **[Problem 2](http://samantha.fewd.us/#fork/mottaquikarim/NYCDA_func_declarations_vs_expressions)**

-

## Homework Review
Let's go over the **[homework](http://samantha.fewd.us/#fork/mottaquikarim/FEWD629_JavaScript_Basics_PSET)** together.

-

## Conditionals
**[Click here](#conditionals)**
---
# Conditionals

-

Conditionals well help us automate programming tasks and also build in decision making capabilities into our programs.

-

#### Learning Objectives
1. Use conditionals to build in decision making into our code.

-

#### Exercises

-

#### [PSET - Conditionals](http://samantha.fewd.us/#fork/mottaquikarim/Conditionals) | [LIVE Instructor Notes](http://samantha.fewd.us/#broadcast/mottaquikarim/Conditionals)
Try to solve all of these

-

#### [Problem - Calculate Grade](http://samantha.fewd.us/#fork/mottaquikarim/Calculate_Grade) | [LIVE Instructor Notes](http://samantha.fewd.us/#broadcast/mottaquikarim/Calculate_Grade)
This one is more difficult, try it out though!

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
# Lecture 9: Intro to JavaScript

-

Time to code, fam.
![pw](https://media1.giphy.com/media/AKwwgxeyAcL6M/giphy.gif)

-

#### Learning Objectives
1. Understand what JavaScript is and what it is used for
2. Learn the basic fundamentals of the JavaScript language

-

#### !! Before we begin !!
**MID COURSE FEEDBACK**
<p></p>

-

#### Rundown
Ok game time. Let's learn some **JavaScript**.

-

#### [Essential Terminology](#essential-terminology)

-

#### [JavaScript Basics](#javascript-basics)

-

#### [Getting Started](#getting-started)

-

#### [Types of Variables](#types-of-variables)

-

#### [Functions and Conditionals](#functions-and-conditionals)
---
# Essential Terminology

-

**Learning Objective**: Learn the essential words and concepts that are used on a daily basis by engineers and project/product managers on the job.
Here are some words and concepts that will hopefully give you a more holistic view of the more technical aspects of the industry. 

-

#### Define: Program
Discrete, highly logical and explicit instructions that are parsed and executed by a computer.
We call this set of human-readable instructions **source code**, or colloquially, a **computer program**.
**Compilers** can take this source code and transform it into **machine code**, a representation of the source that can be executed by the computer's **central processing unit** or **CPU**. 
Not all programs are compiled though, some are **interpreted**. The difference is that compiled languages need a step where the source code is physically transformed into machine code. However, with an interpreted language, this additional step is **excluded** in favor of **parsing** and **executing** the source code directly when the program is run.

-

#### How programs are written
All programs are composed with a collection of **fundamental** concepts that, when combined, can essentially dictate a wide variety of tasks a computer can perform.
Here are a collection of these most important concepts:
* **Declarations**: typically, we can store and retrieve data in our programs by associating them with intermediary values that we call **variables**
* **Expressions**: we use expressions to evaluate stuff. For example, **`2 + 2`** is an example of an expression that will **evaluate** a value, namely 4. 
* **NOTE**: typically we can use expressions and declarations in tandem to perform complex tasks. For instance, we can reference a variable we declared in an expression to help us evaluate new values which can then be stored.
* **Statements**: statements will use expressions and declarations to alternate a program's **control flow**, which is essentially the order in which declarations, expressions, and other statements are executed.
Aside from these fundamental concepts, we also talk a lot about this idea of **algorithms**. An **algorithm** is simple a series of declarations, expressions, and statements that can be used over and over again to solve well defined problems of a certain type.
For example, we can implement an algorithm that converts temperature from **fahrenheit** to **celsius**. It would look something like this:
1. **Declare** F = 32;
2. **Expression** ( **F** - 32 ) / 1.8;
3. **Declare** C = **Evaluated** expression from **[2]**
This is a form of **pseudo** code where we define the steps a computer program &mdash; **any** &mdash; computer program can take to convert **fahrenheit** to **celsius**.
The beauty of programming is that all of it revolves around the same key set of concepts and ideas. For this reason, we do not need to specify any **particular programming language** when discussing the functional aspects of a program.

-

#### Define: Programming languages
A programming language is a series of **grammar** and **rules** that we can define towards writing source code.
Languages are effectively different approaches towards communicating the same ideas in programming. Essentially, we can communicate in say both **French** and **English**, what mainly differs is the structure of our sentences and the actual words and sounds themselves.
The **same analogy** can be made with programming languages.

-

#### Examples of programming languages
There are many. Way too many. 
Here are some of the most popular ones, though.
1. **JavaScript**: this language is interpreted.
2. **Python**: this language is interpreted.
3. **Java**: this language is compiled
4. **Ruby**: this language is interpreted.
5. **C/C++**: this language is compiled.
These languages all build on the same concepts defined above; the main difference lies in **how** they are run (compiled vs interpreted) and also **how** they are used. 
In general, anything programmable can be programmed in each of the languages defined above. However, some languages are better suited for certain tasks above others. 
For example, to perform web programming on the front-end, you'll want to write JavaScript. This is because all browsers collectively support running javascript within it's environment. 
---
# JavaScript Basics

-

Let's begin by defining what javascript actually is, how we can load javascript into our webpages, and how we can write a few lines of super basic javascript syntax.

-

## [JS Global Notes](http://samantha.fewd.us/#fork/mottaquikarim/FEWD627_JS_Basics) | [LIVE Instructor View](http://samantha.fewd.us/#broadcast/mottaquikarim/FEWD627_JS_Basics)

-

#### Learning Objectives
1. What can we do with javascript code?
2. How can we load javascript code into our browser?
3. What are the different ways we can store, retrieve, and use data in javascript?

-

#### What is JavaScript
Originally called **Mocha**, then **LiveScript**, then renamed to **JavaScript**.
2. It's a subclass of ECMAScript, a standardization maintained by Ecma International
3. Basically, Ecma is the **Webster's Dictionary** of JavaScript

-

### What can you do with Javascript?
JavaScript runs in the <strong>browser</strong>, meaning it is used heavily in user-interaction.
In other words, with javascript, you can...

-

#### Animate stuff
You can use javascript to create for example an infinite random prop loop.
<iframe scrolling='no' src='//codepen.io/mottaquikarim/embed/jgIbd/?height=268&theme-id=820&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='min-height: 268px !important;'>See the Pen <a href='http://codepen.io/mottaquikarim/pen/jgIbd/'>jQuery Random Height/Width</a> by Mottaqui Karim (<a href='http://codepen.io/mottaquikarim'>@mottaquikarim</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

-

#### Allow the user to control stuff
You can allow the user to take control of a UI element and dictate its state.
<iframe height="300" src="//jsfiddle.net/2jwnjwfd/1/embedded/result" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

-

#### Mess with people's minds
This is just a pretty cool masking example that is actually pretty hard to pull off with web dev tech (but can be done, as shown here thanks to javascript).
(**FYI**: this formed the basis of [this website](http://maveron.com/) that I built back in the day).
<iframe scrolling='no' src='//codepen.io/mottaquikarim/embed/DABIG/?height=268&theme-id=820&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='min-height: 268px !important;'>See the Pen <a href='http://codepen.io/mottaquikarim/pen/DABIG/'>Mask Effect demo</a> by Mottaqui Karim (<a href='http://codepen.io/mottaquikarim'>@mottaquikarim</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

-

#### Determine the state of something on a page in real time
We are using something called conditionals here.
<iframe width="100%" height="500" style="height: 400px;" src="//jsfiddle.net/hrfq4qrj/1/embedded/result" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

-

#### Load in data dynamically (this is the best one)
Basically, we can interact with API data without ever reloading the page!
---
# Getting Started

-

Before we begin, let us do some basic bookkeeping.

-

## [JS Global Notes](http://samantha.fewd.us/#fork/mottaquikarim/FEWD627_JS_Basics) | [LIVE Instructor View](http://samantha.fewd.us/#broadcast/mottaquikarim/FEWD627_JS_Basics)

-

#### Exercise
Create a new project folder with a **script** tag and include a **main.js** file. Verify that you linked this file properly.
**Question**: How would you know that your **main.js** file is loading without knowing any actual lines of javascript?!

-

#### Linking to Javascript
**How do we set up javascript to run in the browser?**
1. The precedent is similar to what we do to link CSS files &mdash; we employ a tag to tell the HTML page where the javascript code for that page lives.
2. However, we do NOT use the link tag...
3. Instead, we do the following:
```html
<!doctype html>
<html>
	<head>
		<!-- Do NOT link to your javascript here -->
	</head>
	<body>
		<script src="PATH_TO_YOUR_JS_FILE"></script>
	</body>
</html>
```
**NOTE the `<script>` tag**
1. This is a new tag we have never seen before; remember that the `<link>` tag is for CSS files and the `<script>` tag is for javascript files (for now).
2. the `src` attribute is what we use to link to the external js file
3. remember to CLOSE your script tag, unlike the `<link>` tag, `<script>` is NOT self closing!
**Commenting + ( basic debugging of ) code in JavaScript**
```js
// this is an inline comment
console.log('You can write debugging statements like so');
/*
	this
		is
			a
				multilined
						comment
*/
```
---
# Types of Variables

-



-

## [JS Global Notes](http://samantha.fewd.us/#fork/mottaquikarim/FEWD627_JS_Basics) | [LIVE Instructor View](http://samantha.fewd.us/#broadcast/mottaquikarim/FEWD627_JS_Basics)

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

## [JS Global Notes](http://samantha.fewd.us/#fork/mottaquikarim/FEWD627_JS_Basics) | [LIVE Instructor View](http://samantha.fewd.us/#broadcast/mottaquikarim/FEWD627_JS_Basics)

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
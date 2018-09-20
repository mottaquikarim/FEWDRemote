# Lecture 12: Conditionals

-

Welcome to Lecture 12! 

![conditionals](https://media1.giphy.com/media/AGGz7y0rCYxdS/giphy.gif)

-

## Learning Objectives
* Use `if/else` conditionals + boolean logic to achieve control flow
* Differentiate between `true`, `false`, truthy, and falsy
* Review iteration using `for` and `forEach`, and introduce `while` and `do/while` loops

-

## Agenda
* Conditional Statements
* Comparison Operators
* Truthy and Falsy
* Logical Operators
* `while` loops
* Iteration


---
## Warm up


**[Functions Review II](http://samantha.fewd.us/#fork/mottaquikarim/FEWD629_JavaScript_Basics_PSET)**
**[Default Params](http://samantha.fewd.us/#fork/mottaquikarim/NYCDA_func_default_params)**


---
## Conditional Statements
Conditional statements enable us to decide which blocks of code to execute and which to skip, based on the results of a condition, *i.e.* a test.

-

JavaScript supports two conditional statements: `if/else` and `switch`. We'll start off with `if/else` which uses Boolean, `true` or `false`, tests.

-

## If / Else Statement

-


The block of code within the body of the `if` statement, *i.e.* between the `{ }` is run if `expr` evaluates to `true`.

-

`expr` can be any JavaScript expression.
```
if (expr) {
    //code block to run
}
```

---
### Block Statements
A block is delimited by a pair of curly braces, `{}`. We use block statements to group together statements, or lines of code.

-

Any statements intended to be executed after a conditional check will be grouped into a block statement.
```
// simple block
{
    console.log("Hello World!");
    console.log("Hi!");
}
```

Note that there is **no** semicolon at the end of the block.

---
### If Statement Example
```
if (1 > 0) {
  console.log("1 is greater than 0");
}
//=> "1 is greater than 0"
```

---
### Else Statement

If `expr` does not evaluate to `true`, *i.e.* it's `false`, we can add an optional `else` clause to run a block of code.
```
if (0 > 1) {
  console.log("0 is greater than 1");
} else {
  console.log("0 is less than 1");
}
//=> "0 is less than 1"
```

---
### Else if Statement
Use `else if` statements to test more than one case. JavaScript will stop checking conditionals once it hits one that evaluates to `true`.
```
const petType = "cat";
if (petType === "dog") {
  petType += "?";
} else if (petType === "cat") {
  petType += "!";
} else {
  petType = "*" + petType;
}
console.log(petType === "cat!")
//=> true
```

---
Do **not** assign values within a conditional. The conditional is dependent on what you're assigning rather than a comparison:

-

```
x = 5;

if (x = 3) {
    console.log("Will be printed.");
}

if (x = 0) {
    console.log("Will NOT be printed.");
}
```

---
## Ternary Operators
The ternary operator is a "concise" `if/else` statement that returns a value depending on whether the expression evaluates to `true` or `false`:

```
const variable = (expr) ? /* true value */ : /* false value */;
```

-

It's best practice  to have simple ternary operators. We're essentially doing this:
```
if (expr) {
    const variable = /* true value */
} else {
    const variable = /* false value */
}
```

-

Whenever I assign a value to a variable based on some condition, I almost always use a ternary operator. It's cleaner.

-

```
const age = 45;
const minAgeToVote = 18;

const allowedToVote = (age >= minAgeToVote) ? "yes" : "no";
console.log(allowedToVote);
//=> "yes"
```

---
## Comparison Operators
Comparisons in JavaScript can be made using equality comparison operators (`==`, `!=`, `===`, `!==`) and relational operators (`>`, `<`,`>=`, `<=`).

-

We can compare across types, *e.g.* strings against numbers, in JavaScript, but we won't.

-

We should only compare values of the same type. While there is an internal algorithm JavaScript uses for the conversions, we should **not** rely on it.

-

These comparisons are nonsensical, but JavaScript will still let us make them:

```
"A" > "a"
//=> false

"b" > "a"
//=> true

12 > "12"
//=> false

12 >= "12"
//=> true
```

---
## Equality Operator: ==
With the double-equals equality operator, `==`, JavaScript will perform type coercion in the background, if the operands have different types, to check if they are equal.
```
"dog" == "dog";
//=> true

"dog" == "cat";
//=> false

1 == "1";
//=> true

1 == "2";
//=> false
```

-

Basically, numbers and strings that contain numbers of the same value will be considered equal. We will **never** use double-equals.

---
## Identity Operator: ===
Also referred to as the strict equality operator. This operator compares both type and values.

```
1 === "1";
//=> false
```

It does **not** do type conversion. We will always use triple-equals rather than double-equals; it is more precise.

---
## Comparing Objects
Any object, *e.g.* an array, is only equal to itself. Objects are compared by reference, **not** value.

```
[] === []
//=> false

const a = [];
a === []
//=> false

a === a
//=> true
```

Primitives are compared by value whereas objects are compared via where they're stored in memory.

---
## Inequality Operators
We have `!=` and `!==`, with the latter as the strict inequality operator.

We'll always use the `!==` because it returns `true` if the operands are not equal and/or not of the same type.

-

```
1 != "1"
//=> false

1 !== "1"
//=> true

1 !== 2
//=> true
```

---
## Truthy and Falsy
The following values are considered falsy in JavaScript:
```
"" // empty string
NaN // not-a-number
null
undefined
```

-

Everything else is truthy, including empty array,`[]`, and object literals, `{}`.

-

The rules for truthy and falsy are coherent, and used for simplfying conditional expressions.

---
## Not Operator: !
`!` is the logical NOT operator. It returns `false` if the operand is `true`, vice-versa.
```
!true
//=> false

!false
//=> true
```

-

This operator takes one value, so it's an example of a unary operator. We can also wrap the operand in parentheses.

```
!("")
//=> true
```

-

We often use the `!` operator in guard statements in the beginning of a function.

```
function getFinalPrice(price) {
  // `price` is `undefined` when it's not passed in
  if (!price) { return 0; }
  const salesTax = 0.08875;
  return price * (1 + salesTax);
}
```

---
We can use `!!` to verify if a value is truthy or falsy by negating the negation.

```
!!0
//=> false

!!-1
//=> true

!![]
//=> true

!!{}
//=> true

!!null
//=> false

!!""
//=> false
```

---
## Logical Operators
We just saw the not operator, `!`, which is a unary operator. We also have two binary operators in JavaScript:
```
&& // AND
|| // OR
```

We'll use these operators to check multiple expressions or conditions at the same time.

---
## And Operator
The `&&` operator requires both left and right values to be `true` to return `true`. Otherwise, it returns `false`:
```
true && true
//=> true

true && false
//=> false

false && false
//=> false
```

The **AND** operator will only return true when both values are `true`.

-

Example:
```
const network = "GA-Guest";
const pw = "Yellowpencil";
if ((network === "GA-Guest") && (pw === "yellowpencil")) {
    console.log("wifi access granted");
} else {
    console.log("wifi access denied");
}

//which message will be shown in our console?
```

---
## Or Operator
The `||` operator requires either the left or right value to be `true` to return `true`. Otherwise, it returns `false`.
```
true || false
//=> true

false || true
//=> true

false || false
//=> false
```

The **OR** operator will only return `false` when both values are `false`.

-

Example:
```
const day = "Monday";

if ((day === "Monday") || (day === "Wednesday")) {
    console.log("We have class!");
}
```

---
## Short-Circuit Evaluation
Logical expressions are evaluated left to right, so we can use `||` and `&&` for short-circuit evaluation to return one of the operands.

```
false && (x) // short-circuit evaluated to false
true || (x) // short-circuit evaluated to true
```

Note that `x` is not evaluated.

---
## Using && Short-Circuit
We'll use `&&` to check for truthiness before working with a variable. For example, trying to read an a property of `null` or `undefined` will always cause an error

```
undefined.length
//=> Uncaught TypeError: Cannot read property 'length' of undefined
```

-

We can use `&&` to stop the evaluation because `null` and `undefined` are falsy.

```
//a variable not assigned a value is undefined
const x;
x && x.length
//=> undefined
```

* A JavaScript error at runtime can break the rest of your page.

---
## Using || Short-Circuit
We'll use `||` to set a value if the left operand is `false`. This is often used for default values, especially in functions.

```
function getFinalPrice(price) {
  // `price` is `undefined` when it's not passed in
  const price = price || 0;
  const salesTax = 0.08875;
  return price * (1 + salesTax);
}

getFinalPrice(); // 0
getFinalPrice(10); // 10.8875
```

-

**N.B.**: you can also solve the problem above using **default** parameters:
```
function getFinalPrice(price=0) {
  // `price` is `undefined` when it's not passed in
  const price = price;
  const salesTax = 0.08875;
  return price * (1 + salesTax);
}

getFinalPrice(); 
// ^^^ 0, since we set default to be 0 in arg list
getFinalPrice(10); // 10.8875
```

---

## Eligibility Check Exercise

-

Create a blank webpage, load an **app.js** file and write a function that outputs a message based on a user's age. 

-

The program must **print out only the most recent item** a person can do, *e.g.* if a user's age is 46, the message is 'You can run for president':

* Under 16: 'You can go to school!'
* 16 or Older: 'You can drive!'
* 18 or Older: 'You can vote!'
* 35 or Older: 'You can run for president!'
* 62 or Older: 'You can collect social security!'

**PS:** by "print out" we mean console.log the returned value of a function invoked
-

If a user doesn't provide a valid age, tell them to do so. For now, you can hardcode the age to test your code.

---
## Loops

Let's review some ways to make loops in JavaScript. We'll use them to evaluate some block of code multiple times.

-
## While Loop
We can use the `while` statement to run a code block as long as the condition is `true`. The condition is evaluated **before** executing the block.

```
while (condition) {
    //statements
}
```

-

Outside of interviews, I've rarely use a `while` loop. They're useful for rare problems where you're not iterating over an array, or you don't know when to stop outside of the loop.

-

## Infinite and Never-run While Loops
Remember, the condition is evaluated **before** executing the block.
```
while (true) {
  // infinite loop
}

while (false) {
  // never-run loop
}
```

-

Create an array containing the numbers 1-10 inclusive
```
const num = 1;
const numArray = [];
while (num < 11) {
    numArray.push(num);
    num++;
}
console.log(numArray);
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```

-

Alertnative approach:
```js
const numArray = [];
while (numArray.length < 10) {
    numArray.push(numArray.length+1);
}
console.log(numArray);
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```
^ what are the key differences between this example and the one above it?

-

ES6 approach:
```js
const numArray = Array.from(Array(11).keys()).slice(1)
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```
Note that this approach, while terse may be considered a bit more confusing. (NB: I'm personally very fond of this technique)


---
## For Loop
We've see a `for` loop already. Let's take one more look:
```
const a = [1, 2, 3, 4, 5];
for (const i = 0; i < a.length; i++) {
  console.log(a[i]);
}
//what should we see?
```

-

If we absolutely need to use a `for` loop to iterate over an array, it's helpful to cache the array's length:

```
const a = [1, 2, 3, 4, 5];
const len = a.length;
for (const i = 0; i < len; i++) {
  console.log(a[i]);
}
```

-

Alternatively, here is a more terse approach
```
const a = [1, 2, 3, 4, 5];
for (const i = 0, len = a.length; i < len; i++) {
  console.log(a[i]);
}
```

---
## forEach Loop
As mentioned in the last class, we prefer the `forEach` loop:
```
["dog", "cat", "turtle"].forEach(
    function(currentValue, index, array) {
        console.log("I want a ", currentValue);
        console.log(currentValue);
    }
);
```
Using the `array` and `index` parameter, how else could we have logged each value?

-

Here's another way to write the above (NB: I strongly prefer this approach

```
["dog", "cat", "turtle"].forEach(
    (currentValue, index, array) => {
        console.log("I want a ", currentValue);
        console.log(currentValue);
    }
);
```

-

^ we call this an `arrow function`, it has subtle differences (I would say advantages) over using the `function` keyword. We will discuss these nuances when appropriate but for now strongly prefer to use arrow functions over function expressions when handling callbacks (ie: functions passed into other functions, like above)

---

## Practice

* **[Conditionals](http://samantha.fewd.us/#fork/mottaquikarim/FEWD629_functions_pset_3)** **OR** **[Conditionals (HARD MODE)](http://samantha.fewd.us/#fork/mottaquikarim/JSR-PSET_conditionals)**
* **[Conditionals w/UI](http://samantha.fewd.us/#fork/mottaquikarim/Calculate_Grade)**
* **[Loops](http://samantha.fewd.us/#fork/mottaquikarim/FEWD_629_functions_pset_8)** - NB: there is a **second** tab with additional problems!
* **[Arrays](http://samantha.fewd.us/#fork/mottaquikarim/FEWD_629_functions_pset_10)**

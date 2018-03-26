# Lecture 10: DataTypes

-

Welcome to Lecture 10! 

![foo](https://media3.giphy.com/media/lXiRLb0xFzmreM8k8/giphy.gif)

-

#### Learning Objectives

* Review JavaScript Datatypes
* Declare, assign to, and manipulate data stored in variables

-

#### Agenda
1. What are datatypes?
2. Supported Javascript Datatypes
3. Declaring Variables in Javascript
4. Datatypes and supported operators
5. Arrays and array ops

---

## Datatypes

In programming languages, a data type is a classification identifying one of various types of data. 

-


From a data type, we can determine:

* the possible values for that type
* the operations that can be performed on that type
* the meaning of the data
* the way values of that type can be stored

-

Most programming languages have the following data types. 

👇👇👇

-

### Strings

* single words or sentences surrounded by double or single quote, e.g. `'Hello World'`

-

### Numbers

* typically languages will make a distinction between **integers** and **floats**
* (in some languages, distinctions go even deeper, ie: **long**, **double**, **short**, etc

-


### NB
* in javascript, all numbers are represented as 64 bit floating point integers
* however maximum "safe" number in javascript is (2^53)-1, or 9007199254740991
* **[more info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)**

-

### Booleans

* either true or false, i.e. `true`, `false`

-

### Arrays / Lists

* collections of data, e.g. `['Shirts', 'Pants', 'Dresses']`

-

### Dictionary / Hash-map

* collection of data in the form of key-value pairs. Also referred to as a `map` or `dictionary`.

-

### Objects / Classes

* a representation of something in the real world using the datatypes described above

---

## Supported JavaScript Datatypes

👇👇👇

-


In JavaScript, we have five **primitive** types:

* **string**
* **number**
* **boolean**
* **undefined**
* **null**
* **symbol**

-

### Strings

```js
"hello!" // double quotes
'hi' // single quotes
`testing` // template literal - very useful, as we will see
```

-

### Numbers

```js
5
3.14159
4. // yes, this is valid. 
   // no, do not ever do this in actual code
```

-

### Boolean

```js
true // lower case, always
false
```

-

### undefined

```js
undefined
```

By itself, this datatype is quite meaningless. However when we get to variables we will see that it is essentially used to check if a variable has been **declared**

-

### null

```js
null
```

Same as above, the main difference being that **null** is used convey that a variable has been **declared** but it is still **empty**

-

### Symbol

```js
Symbol('description')
```

-

Out of scope of this class, but feel free to read up on them on MDN!

-

### Determining the Type
We can determine the type of a variable or value using `typeof()` (which returns a string).

```js
typeof 10
=> 'number' // note the quotations, typeof yields a string
```
```js
typeof {}
=>  'object'
```
```js
typeof 'Hello World' 
=> 'string'
```
**Due to how JavaScript was first implemented, `typeof(null)` returns `'object'`**

-

Before exploring each individual data type and the operations we can apply to them, let's see how we can declare variables

---
## Variables

👇👇👇

-

Variables are used to store data into a computer's memory so we can reference them later. We will always use the `const`/`let` keywords to declare a variable.

-

**const** vs **let**

```js
const a = 1;
let b = 1;
```

* **const**: used to convey a _constant_ variable, meaning we don't expect to **ever** change the datatype of **a**
* **let**: used to convey a ... _variable_ variable, meaning we **do** - and we are allowed to - mutate the datatype (or value, or both) of **b**



-


If we declare a variable without assigning it a value, its value is `undefined`:
```js
let a;
a
=> undefined
```

**Question**: what would happen if we tried the above with **const**?

-

### Naming
By convention, all names should be `camelCased`, whether they're for variables or functions.


```js
const myScore = 100;
```
```js
const myString = "Hello World!";
```

-

Good variables are descriptive.
Bad variables are ambiguous.

**NOTE**: `$` and `_` are also valid variables.

There are certain reserved words we can't/shouldn't use for names, *e.g.* `var`, `function`, `class`, etc.

Do not use reserved keywords!

-

### Assignment Operators
Values are assigned to a variable using `=`:
```js
const num = 1;
num;
=> 1
```

-


JavaScript also has compound assignment operators, `+=`, `-=`, `/=`, and `*=`:
```js
num;
=> 1

num += 5;
=> 6
```

**NOTE**: these usually only apply to the **number** datatype, however the **+=** will also work for strings

-

We can use `++` and \-\- to increment and decrement by `1` respectively as postfix or prefix operators:
```js
const num = 5;
num;
=> 5

num++;
=> 5
num;
=> 6

++num;
=>7
```

-

### Number to String
Use the `toString()` method on a number by itself, or on a variable that's storing the number:
```js
const num = 1;
num.toString();
=> "1"

(1).toString();
=> "1"

// what does this return?
1.toString();
```

-

### String to Number
Use the `Number()` method, and pass in the string. It will return `NaN`, or not-a-number for anything that's not parseable:
```js
Number("5");
=> 5

Number(":)");
=> NaN
```

**QUESTION** what is **NaN**? How can we prove to ourselves definitively his datatype?

-

Now, we will explore some of the javascript specific datatypes in further detail

---

### Numbers
👇👇👇

-

In JavaScript, we only have floating point numbers, which results in cases like these:
```js
0.1 + 0.2
=> 0.30000000000000004
```

```js
3.0 === 3
=> true
```

-

### Arithmetic Operators
We use operators to work with data in JavaScript. The standard arithmetic operators are available:
```js
1 + 2
=> 3
```
```js
2 - 5
=> -3
```
```js
5 / 2
=> 2.5
```
```js
6 * 2
=> 12
```

-

### Additional Math Operators
For additional math operators, *e.g.* power, we can use the `Math` object
```js
// 3^2 becomes
3 ** 2
=> 9
```
```js
// square root of 4 becomes
4 ** 0.5
=> 2
```
```js
// random number between 0 and 1 exclusive
Math.random()
=> 0.3156855241316119
// hopefully, you got a different random number!
```
```js
// rounding a number to an integer
Math.round(3.99)
=> 4
```

---
### Strings
Strings are a collection of characters. We'll use this type for words and text, *e.g.* `'John Doe'`. We can combine, or concatenate strings together, using the `+` operator:
```js
// notice the space in "Hello "
"Hello " + "World!"
=> "Hello World!"
```

-

If we try adding a number and a string, the number gets converted to a string:
```js
"3" + 3
=> "33"

"5" + 6
=> "56"
```

-

### Template Literals
Template literals are string literals that allow you to embed and splice expressions in a more flexible way.

-

We use backticks to indicate the start of a template literal:
```js
// multi-line strings
`Hello, this is Line 1!
...and here is Line 2!
`
```

-

Placeholders and more complex expressions can also be used:
```js
const firstName = 'Foo';
const lastName = 'Bar';
`Hello, ${firstName}`
=> "Hello, Foo"

`Bye, ${firstName + lastName}`
=>"Bye, FooBar"
```

-

Note that you need to end the string with whatever type of quote you started out with:
```js
"Greetings y'all!"
=> 'Greetings y\'all!'
```

Depending on the environment, the quote may appear as escaped or unescaped.

-

You can escape a quote manually using a `\`
```js
'John\'s a JavaScript developer!'
=> 'John\'s a JavaScript developer!'
```

**NOTE**: this is not necessary if using string literals

---

## Practice

**[Basic Vars Review](http://samantha.fewd.us/#/fork/mottaquikarim/Basic_Vars_Review)** | **[LIVE Instructor Version](http://samantha.fewd.us/#/broadcast/mottaquikarim/Basic_Vars_Review)**

-

### Mad Libs

Let's create a simple mad libs program.

1. Create three variables, `noun`, `verb`, `adjective`. 
2. By default all three should be set equal to **"---------"** (essentially a blank line)
3. When the values of those variables are swapped with an actual noun, verb, adjective, display the following string:

```js
"The [NOUN] [VERB] [ADJECTIVE]"
```

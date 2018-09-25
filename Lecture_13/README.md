# Lecture 13: Loops and Object Literals

-

Welcome to Lecture 13! 

![kittens](https://media1.giphy.com/media/102mqDgAb4Kfug/giphy.gif)

-

## Learning Objectives
* Practice conditionals
* Review iteration using `for` and `forEach`, and introduce `while` and `do/while` loops
* Use Object literals for solving problems in javascript

**Please send me Final Project URL Thursday (to demonstrate progress**

-

## Agenda
* Conditional Statements Practice
* `while` loops
* Iteration
* Object literal basics

---
## Warm up


**[Conditionals Review](http://samantha.fewd.us/#fork/mottaquikarim/FEWD629_functions_pset_3)**

**[Conditionals w/UI](http://samantha.fewd.us/#fork/mottaquikarim/Calculate_Grade)**

-

**Build Rock, Paper, Scissor functions**

* Create function that takes two arguments, player1Input and player2Input
* Function should return `1` if player1 wins, `2` if player2 wins, 0 if tie


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

* **[Loops](http://samantha.fewd.us/#fork/mottaquikarim/FEWD_629_functions_pset_8)** - NB: there is a **second** tab with additional problems!
* **[Arrays](http://samantha.fewd.us/#fork/mottaquikarim/FEWD_629_functions_pset_10)**

---

## Object Literal Basics

Let's discuss the mechanics of how object literals are created and used. Then, let's use them to build something useful.

-

Object Literals are another type of **data structure**, or method for storing and retrieving data. 

* We are already intimately familiar with one type of data structure, **arrays**.
* Object literals are essentially dictionaries, or associative arrays.
* With arrays, we use the **index**, a **number**, as a way to store and retrieve information.
* With object literals, we use the **key**, a **string**, as a way to store and retrieve information.

-

**SIDE NOTE**

So actually, the computer science term for dictionaries/object literals/etc is called the **hash map**. 

**Hash maps** have a **hashing function** and an internal **array** for storing data. Given a  **key** and **value** pair that we wish to store, the hash map converts the **key** into an index for the array using the hashing function and stores the value at the calculated index.

-

### Creating Objects

```js
// empty object literal
const myObj = {};

// object with prefilled values
const myObj2 = {
    "property1": "value1",  // notice the colon!
    "property2": 2, // notice the comma!
}

// updating an object after the fact
myObj2["property3"] = true;
```

Note that updating an object literal is not the same a **redefining** it. This is why we are able to mutate our **const** object without errors.

-

Objects are just another type of valid javascript datatype. Question:

```js
//  what do you expect to see?
console.log(typeof myObj2); 

 // what do you expect to see?
console.log(typeof myObj2["property1"]);

// how about now?
console.log(typeof myObj2["thisPropertyDoesntExistTho"]);
```

-

A note about syntax:

```js
myObj2.foobar = 'baz';

const myObj3 = {
    test: 1,
}

console.log(myObj3.test)
```

Sometimes you will see object properties being referenced and defined in the manner above. 

👇👇👇

-

Generally, this is usually **ok** however if you want to store an object property that has invalid javascript characters such as spaces or dashes you **must** use the approached defined initially.

-

### Dynamically setting / retrieving values

Consider the following:

```js
const o = {
	"test": 1,
}

const key = "test";
console.log(o[key]); //  what should this give us?
```

```js
const key = "foo";
const o = {
	[key]: 'val',
}
console.log(o); // what key is stored in o?
```

Keep this technique in mind, it will come in handy when we write more complex code.

-

### Methods

Object properties that are type `function` are called **`methods`**. (Just a fancy word for a function that is the property of an object). 

👇👇👇

-

Here's how we can get/set methods

```js
const human = {
    'name': 'Taq Karim',
    speak(catchphrase) {
		    return "Hi, my name is " + 
				human.name + 
				'. ' + 
				catchphrase;
		}
}

console.log(human.speak('BOOM. We chillin')); 
```

-

Generically, we can define methods as follows:

```
const obj = {
	method() {
		// this is preferred
	},
	// or
	method2: function() {
	
	},
	// or
	method3: () => {
	
	}
}
```

-

### Example of object usecase

```js
const htmlNode = {
	tagName: 'div',
	attributes: {
		'data-test': '1',
		'id': 'LOL-dont-try-this-at-home',
		'class': 'foo bar',
	},
	getAttribute(name) {
		return htmlNode.attributes[name];
	},
	setAttribute(name, value) {
		htmlNode.attributes[name] = value;
	},
	classList: {
		add(name) {
			const currClass = htmlNode.getAttribute('class').split(' ');
			currClass.push(name);
			htmlNode.setAttribute('class', currClass.join(' '))
		}
	},
}
```

* this is a **representation** in javascript of an **HTML DOM element**

-

Primarily, this is the major usecase for objects. Think of it as a way to represent a **real world** thing in terms of code. Object literals are the simplest way to achieve that.

In a future lecture we will consider **classes** and how we can standardize this concept and make it more reusable.

-

Minimally, however, we can think of object literals as a way to **namespace** a bunch of similar datatypes. For instance, if we wanted to store some properties of a cat...

-

```
const belle = {
	fullName: 'Annabelle Lee',
	age: 12,
	isFluffy: true,
	speak() {
		return 'meow'
	}
}
```

In this case we have associated what would have been a few generic variable names under the **belle** namespace. This way, we are no longer in danger of scope collision.

-

### Example of object usecase

Consider the following function.

* What does it do?

```js
const validatePlayerChoice = player => {
	const lp = player.toLowerCase();
	const c = lp.substring(0,1);
	if (c !== "r" && c !== "p" && c !== "s") {
		throw new Error("INVALID INPUT: player " + c)
	}
	return c;
}
```

-

With comments now...

```js
const validatePlayerChoice = (player) => {
	// remove bias for case insensitivity
	const lp = player.toLowerCase();

	// remove bias for misspelled choices
	const c = lp.substring(0,1);

	if (c !== "r" && c !== "p" && c !== "s") {
		throw new Error("INVALID INPUT: player " + c)
	}

	// if we are here, then player is VALID and it is either
	// "r", "p", "s"
	return c;
}
```

-

Suppose we created an object as follows:

```js
const validPlayerChoices = {
	'r': true,
	'p': true,
	's': true,
}
```

How could we use this object to make our player validation logic easier?

👇👇👇

-

```js
const validPlayerChoices = {'r': true, 'p': true, 's': true,}

const validatePlayerChoice = (player) => {
	// remove bias for case insensitivity
	const lp = player.toLowerCase();
	// remove bias for misspelled choices
	const c = lp.substring(0,1);
	if (typeof validPlayerChoices[c] === "undefined") {
		throw new Error("INVALID INPUT: player " + c)
	}
	// if we are here, then player is VALID and it is either
	// "r", "p", "s"
	return c;
}
```

What are some benefits to this approach?

-

### PSET

In **[Samantha](http://samantha.fewd.us/#fork/mottaquikarim/FEWD_629_functions_pset_9)**, implement the first two functions:

* **getSuperHero**
* **updateSuperHero**

Work in groups of 2, 10 minutes

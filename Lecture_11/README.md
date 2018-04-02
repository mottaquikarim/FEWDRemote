# Lecture 11: Functions

-

Welcome to Lecture 11! Here's a brief breakdown of today's class.

![foo](https://media0.giphy.com/media/demgpwJ6rs2DS/giphy.gif)

-

#### Learning Objectives
1. Determine the scope of variables
2. Understand how functions are written and used in javascript
3. Understand **why** functions are useful and therefore important

-

#### Agenda

* Functions
* Parameters and Arguments
* Return Statement
* Defining of Scope
* Practice

---
# Warmup

#### [PSET - Warmup](http://samantha.fewd.us/#fork/mottaquikarim/FEWD629_JavaScript_Basics_Warmup) | [LIVE Instructor Notes](http://samantha.fewd.us/#broadcast/mottaquikarim/FEWD629_JavaScript_Basics_Warmup)

-

Let's implement a simple **Madlibs** program (as a class).


---
## Function Declarations

A **function** is a reusable statement or group of statements that can be invoked anywhere in a program. 

-

### Why  Functions, tho?

we no longer have to rewrite the same statements over and over again.

-

gives us the ability to write reusable, modular code that is easy to test and maintain

-

A critical component of programming, functions address a key tenet of engineering: 

**Don't Repeat Yourself**, 

or

**DRY**.

-

Our goal is to create programs with as few lines as possible, while maintaining clarity.

-

### Writing functions

-

**Declaration**
```
function turnOnLight() {
    // implementation here
		return true;
}
```

-

**Expression**

```
const turnOnLight = () => {
    // implementation here
		return true;
}
```

_This is the preferred method!_

-

**Guts breakdown**

* **()**: arguments list
* **{}**: function body
* **return**: what datatype the function evaluates to

-

### Invoking Functions

-

Calling, or invoking, a function executes the code defined inside the function.

```
someFunctionName(); // notice the ()
```

* the **()** after the `someFunctionName` *invokes* the function.
* this means that the code written in our function definition above will **only** run when the function is explicitly invoked. Till then, the logic stays dormant.

-

It is therefore worth noting that in some cases functions are used as a strategy for **deferring** the execution of a block of code until an **event** occurs.


-

**Declaration**
```
turnOnLight(); // this will run

function turnOnLight() {
		// implementation here
		return true;
}

turnOnLight(); // ok to also call it here
```

-

**Expression**
```
 // this will NOT run, throws err
turnOnLight();

const turnOnLight = () => {
		// implementation here
		return true;
}

turnOnLight(); // this will work though
```

---
## Parameters and Arguments

-

**Parameters**
```
const addTwoNumbers = (param1, param2) => {
		// implementation here
		// param1 and param2 are available for use here
		return param1 + param2;
}
```

* **param1** and **param2** are our function's **parameters**, essentially **inputs** established during the function's **definition**
* it is important to remember that we only **declare** parameters during the definition portion, they are **defined** during **invocation**

-

**Arguments**
```
const add = (param1, param2) => {
		return param1 + param2;
}

// 1 and 2 are the ARGUMENTS passed in to our function
const a = add(1,2); 

// 3 and 4 are the ARGUMENTS passed in to our function
const b = add(3,4); 
```
* arguments are the actual data points we pass in to our function
* in the example above, the first time **`add`** is invoked, **param1 = 1** and **param2 = 2**
* the second time **`add`** is invoked, **param1 = 3** and **param2 = 4**

-

To summarize:


The **params** are set to the **args** that are passed in to the function when it is **invoked**

-

Another example

```
const fn = (param) => {
	return param + 1
}

fn(9)
```

* 9 is the argument
* calling **`fn(9)`** will take us to the definition above and set param = 9

-


**NOTE**:

In javascript, there is no formal way to specify the **datatype** of individual params. 

In order to validate parameter datatypes, we must write logic within our functions and short circuit (exit quickly) as necessary

-

**Default Parameters**

Last note, we are able to specify some parameters to be **default**

```js
const add = (p1, p2=0) => {
	return p1 + p2;
}

add(5, 1); // 6
add(5); // 5
```

---
## Return Statement

**THIS IS REALLY IMPORTANT, FAM**

-


Functions are only useful if they *return* something.

Using the return statement ends the function's execution and "spits out" the value we're returning.

-

By default, all functions in JavaScript return undefined. Even if we don't have the return keyword in our function body, it will return undefined.

-

**STORING RETURNED VALUE IN VARIABLE**

```js
const sum = (x,y) => x + y;
// ^^^ equivalent to:
// const sum = (x, y) => {
//    return x + y;
// }

const z = sum(3, 4);
//=> 7 // returned from sum(3, 4);

console.log(z);
//=> 7 // assigned to variable z

console.log(sum(3,4))
//=> alternative to storing in z and console.logging
```

-

**RETURN STOPS EXECUTION**

The return statement will completely stop the function's execution. Any statements after the return statement will not be called.

```
const speak = > (words) {
  return;

  // The following statements will not run:
  const numOne = 1;
  const numTwo = 2;
  console.log(words);
}

//what will speak("hi") return?
```

-

**TWEET LENGTH CHECK FUNCTION**

```
const isTweetInRange = (text, longerSizeEnabled = false) => {
  const longerSize = 280;
  const defaultSize = 140;
  const maxLength = longerSizeEnabled ? longerSize : defaultSize;

  return text.length <= maxLength;
}

console.log(isTweetInRange("Hello World"));
//=> true
```

---
## Defining of Scope

We define **scope** to be _visibility_ of variables within an execution context, or _region_ of source code.

-
If a variable is not in (the current) scope, then it cannot be used since it is not accessible.

-

### Examples

-

```
const speak = (words) => {
	console.log(words);
	return true;
}

//we don't have access to `words`
//outside of the speak function's body
console.log(words);
//=> Uncaught ReferenceError: words is not defined
```

-

```
const speak = (words) => {
	console.log(words);
	return true;
}

speak();
//we don't have access to `words`
//outside of the speak function's body
console.log(words);
//=> Uncaught ReferenceError: words is not defined
```

-

What do we expect the following consoles to print?

```
const speak = (words) => {
	const newWords = "Test " + words;
	return words;
}

const f = speak('test')
console.log(words);
console.log(newWords);
console.log(f);

```

-

**GLOBAL SCOPE**

By default, we're in the global scope. Anytime a variable is declared outside of a function, it is part of the global scope.

-

Global variables are bad practice because it's easy to accidentally overwrite the value of a variable. Any function or expression on the page can reference and alter a global variable.

-

**GOTCHA** alert

```
a = 5;
```

^^ what does this do...?

-

```
// message is part of the global scope
const message = "Sup, fam";

console.log(message);
//=> "Sup, fam"

// all global variables are properties
// of the window object in the browser
console.log(window.message);
//=> "Sup, fam"
```

-

**Question**: what will this output?
```
const globalNum = 1;
const scopeHelper = () => {
    const localNum = 2;
    console.log(globalNum);
    console.log(localNum);
}

scopeHelper();

console.log(localNum);
// what will this do?

const k = scopeHelper();
// what is the typeof k?
```

-
**Question**: how about this?
```
const globalNum = 1;
const scopeHelper = () => {
    const localNum = 2;
    const globalNum = 5;
    console.log(globalNum);
    console.log(localNum);
}

scopeHelper();
```

-
**Question**: Hard mode
```
const numOne = 1;

const getScore = () => {
  const numTwo = 2;
  const numThree = 3;

  const add = () => {
      return numOne + numTwo + numThree;
  }

  return add();
}

getScore();
```

---

## Practice

* **[Functions I](http://samantha.fewd.us/#fork/mottaquikarim/Functions_Practice)**
* **[Functions II](http://samantha.fewd.us/#fork/mottaquikarim/FEWD629_JavaScript_Basics_PSET)**
* **[Default Params](http://samantha.fewd.us/#fork/mottaquikarim/NYCDA_func_default_params)**
* **[Scope Practice](http://samantha.fewd.us/#fork/mottaquikarim/NYCDA_func_scope)**

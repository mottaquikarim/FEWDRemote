# Lecture 13: Objects, Dynamic Data

-

Welcome to lecture 13! Here's a brief class breakdown.
![kittens](https://media1.giphy.com/media/102mqDgAb4Kfug/giphy.gif)

-

## Learning Objectives
0. Get good at conditionals, fam
1. What are objects? How are they useful in programming?
2. **(Time permitting)** How can we store and manipulate dynamic data with arrays and objects?

-

## Homework
Implement this **[Batman Game](https://fewdmaterials.github.io/BatmanGame/)**. Read the instructions **carefully**. You are to publish your commits to github and submit the end URL (which should have a "game" where Batman can move and jump) to slack, as per usual.

-

## Additional Practice
Please solve:
1. **[these following problems](http://samantha.fewd.us/#fork/mottaquikarim/FEWD629_functions_pset_3)**
2. **[this one](http://samantha.fewd.us/#fork/mottaquikarim/Calculate_Grade)**
3. **[these problems](http://samantha.fewd.us/#fork/mottaquikarim/FEWD629_functions_pset_6)**

-

## Last Class Notes
Here are the **[notes from last lecture](http://samantha.fewd.us/#broadcast/mottaquikarim/fewd627_12-notes)**

-

## TODAY's Notes
Here are the **[notes for TODAY's lecture](http://samantha.fewd.us/#broadcast/mottaquikarim/fewd627_13-notes)**

-

#### To Do Today

-

#### [Warmup](#warmup)

-

#### [Objects](#objects)

-

#### [Arrays](#arrays)
---
# Warmup

-

Let's begin with a few exercises.

-

## TODAY's Notes
Here are the **[notes for TODAY's lecture](http://samantha.fewd.us/#broadcast/mottaquikarim/fewd627_13-notes)**

-

## Conditionals
Now to review some if/else conditional logic.
**[Logic Practice](http://samantha.fewd.us/#fork/mottaquikarim/FEWD629_functions_pset_2)**.

-

## Review
Here's a quick reminder of what we covered last time.
```js
// boolean operators
// false
console.log( 3 === '3' );
// true; LOL don't ever use...wtf is this
console.log( 3 == '3' ); 
// true
console.log( 3 !== '3' );
// false; don't ever use this again 
console.log( 3 != '3' ); 
// false 
console.log( 3 > 3 ); 
 // true
console.log( 3 >= 3 );
// this evaluates to false, so skip
if ( 3 === '3' ) { 
    console.log('here')
}
// evaluates to true
if ( 3 !== '3' ) { 
    console.log('here2')
}
// this is "falsey", will not run
if (undefined) {
    console.log('here?')
}
// this is "truthy", so will run
if (2) {
    console.log('here!');
}
const isItRaining = false;
const isItCold = true;
// logical operators
// logical OR
if (isItCold || isItRaining) {
    console.log('wear a coat')
}
// logical AND
if (isItCold && isItRaining) {
    console.log('wear a coat AND bring an umbrella');
}
else {
    console.log('wear regular clothes, yo')
}
// if else if else block
const temp = 62;
if ( temp <= 32  ) {
    console.log('it is freezing')
}
else if (temp > 32 && temp < 90 ) {
    console.log('it is normal')
}
else {
    console.log('you dead');
}
```
---
# Objects

-



-

## TODAY's Notes
Here are the **[notes for TODAY's lecture](http://samantha.fewd.us/#broadcast/mottaquikarim/fewd627_13-notes)**
<p></p>

-

## Exercises

-

## [Problems 47-50: Objects](http://samantha.fewd.us/#fork/mottaquikarim/FEWD_629_functions_pset_9) | [LIVE class notes](http://samantha.fewd.us/#broadcast/mottaquikarim/FEWD_629_functions_pset_9)
<p></o>
Objects in javascript are a way to group variables that are similar to each other thematically.

-

## Example
Describe a `cat` with javascript.
Based on what we know thus far, we can do the following:
```js
const catName = 'Annabelle Lee';
const catType = 'tabby';
const catLimbs = 4;
const catAge = 10;
const catIsCute = true;
```
Using those stored variables, we can reasonably formulate a portrait of a paricular cat.
However, what if we needed to describe **two** cats in javascript? What now?
Again, based on what we know so far, we would be force to do the following:
```js
const catName2 = 'Annabelle Lee';
const catType2 = 'tabby';
const catLimbs2 = 4;
const catAge2 = 10;
const catIsCute2 = true;
```
**OR**, we'd have to do the following:
```js
const belleFullName = 'Annabelle Lee';
const belleType = 'tabby';
const belleLimbs = 4;
const belleAge = 10;
const belleIsCute = true;
```
**^^^** with both of those strategies, we **could** solve our problem of having described two cats...but the issue still persists - what if we needed 10 cats? What if we had **two cats with the same name**? What if we generically wanted to define a cat through a function?
In order to solve all of the above usecases, we must now consider a new type of javascript variable, the **object**.
Objects are **everywhere** in javascript **and** have much deeper usecases beyond what was outlined above. In fact, all of javascript itself is **built** on objects.
Before going further, let us look at how to store objects and manipulate them.

-

#### Example
Our previous cat, now as an object:
```js
const belle = {
    type: 'tabby',
    age: 10,
    limbs: 4,
    isCute: true
};
```
Another way to do this:
```js
const belle = {};
belle.type = 'tabby';
// ..etc..
```
A third way to do this:
```js
const belle = {};
belle['type'] = 'tabby';
```
Reading objects:
```js
const belle = {
    type: 'tabby',
    age: 10,
    limbs: 4,
    isCute: true
};
console.log(belle.type); // tabby
console.log(belle['age']) // 10
const key = 'limbs';
console.log(belle[key]); // 4
```
---
# Arrays

-



-

## TODAY's Notes
Here are the **[notes for TODAY's lecture](http://samantha.fewd.us/#broadcast/mottaquikarim/fewd627_13-notes)**
<p></p>

-

## Exercises

-

## [Basic Practice](http://samantha.fewd.us/#fork/mottaquikarim/Arrays_PSET)

-

## [Additional Practice](http://samantha.fewd.us/#fork/mottaquikarim/FEWD_629_functions_pset_8)
<p></p>
Arrays are **objects** that have **numerical** keys. We use them to define and manipulate lists containing **similar** information.
So for example, we could use an array to keep track of the test scores for every student in a class, since each test score is a number from 0-100. Additionally, arrays are useful to sort information or keep track of stuff positionally (ie: first item more important than second, etc).
**Example**
Three ways to define an array. **[Resource](http://fewd.us/howdoi/#/problem/3561)**
```js
// preferred method
var arrayEx1 = []; 
// not preferred
var arrayEx2 = new Array(); 
// array with some predefined values
var arrayEx3 = [1,2,3,4]; 
``` 
You can read array points like so:
```js
console.log(arrayEx3[0]); // 1
console.log(arrayEx3[2]); // 3
```
Notice that arrays are **0-index** based, meaning the first item in an array will have an index of 0.
**Define: index** -- this is the **key** of the array, notice how it is numerical.
An array is an object, so we can access properties with the **[]** notation. **However,** something like this **arrayEx3.0** will not work.
**Length property**
We can access the length of an array (ie: the number of items inside of it), quite easily with the **.length** property
```js
console.log(arrayEx3.length); // 4
```
Note that it says **4**, not **3**. The **last** index of an array is always **1 minus the length** since indices are **0-based**.
**Array Methods**
Adding/removing items to end of array. **[Resource](http://fewd.us/howdoi/#/problem/3566)**
```js
var arr = ["car", "mouse", "computer", 1, "FEWD", 50];
arr.pop(); // this will remove the last item in the array called arr
console.log(arr); // this will show us the elements inside of arr after the pop()
var arr2 = ["car", "mouse", "computer", 1, "FEWD", 50];
arr2.push('new item'); // you can push in a new string
arr2.push(27); // you can push in a new number
arr2.push(['new array', 2, 'cat']); // you can even push in another array
console.log(arr2);
```
Adding/removing items to beginning of array. **[Resource](http://fewd.us/howdoi/#/problem/3567)** 
```js
var arr1 = ['bike', 'snacks', 'ruby', 10];
arr1.shift(); // this will remove the first item which is bike
console.log(arr1);
var arr2 = ['bike', 'snacks', 'ruby', 10];
arr2.unshift('games'); // this will add games to the beginning of the array
console.log(arr2);
```
Adding/removing items anywhere. **[Resource](http://fewd.us/howdoi/#/problem/3568)** 
```js
var arr1 = ['FEWD', 50, 'JS', 'Array', 'Methods'];
arr1.splice(1, 0, 'add this', 'also add this'); // at index [1] we want to remove none and add the 2 strings
console.log(arr1);
var arr2 = ['JAVASCRIPT', 2813, 'i<3codes', true, false];
arr2.splice(2, 1); // at index [2] we want to remove one item
console.log(arr2);
```
Looping. **[Resource](http://fewd.us/howdoi/#/problem/3580)**
```js
// example using for loop and array:
var scores = [22, 46 , 99]   // array of scores
    , arrayLength = scores.length   // items in array
    , roundNumber = 0   // current round
    , msg = " "        // message
    , i;              // counter
    
// loop through the items in the array
/*
    here's how a standard for loop workds
    for ( initialization; condition; update ) {
        // note that after every 'initialization'
        // 'condition' and 'update' we have semicolons
        // within this for block you would add code
        // that would get run on every iteration of loop
    }
*/
for ( var i = 0; i < arrayLength; i++ ) {
    
    // arrays are zero based so 0 is round 1
    // add 1 to the current round
    roundNumber = ( i + 1 );
    
    // write the current round to the message
    msg += 'round' + roundNumber + ': ';
    
    // get the score from the scores array
    msg += scores[i] + " ";  
    
    console.log('=========================');
    console.log( 'i is: ', i );
    console.log( 'scores['+i+'] is: ', scores[i] );
    console.log( 'roundNumber: ', roundNumber );
    console.log( 'msg: ', msg );
    console.log('=========================');
}    
    
```
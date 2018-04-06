const a = 1;

if (a < 0) { // in a conditional statement, if expression is false then the block is skipped
    //code block to run
    // this code will ONLY run IF the expression in the parenthesis 
    // evaluates to TRUE
    console.log('a is less than 0')
}

if (a < 10) {
	console.log('will this run...?')
}

const temp = 35;
if (temp < 32) {
	console.log('it is freezing out')
}
else {
	console.log('it is not freezing out')
}

if (temp < 32) {
	console.log('wear a coat and a scarf')
}
else if (temp < 45) {
	console.log('wear a coat')
}
else if (temp < 65) {
	console.log('wear a sweater')
}
else if (temp < 85) {
	console.log('wear shorts')
}
else {
	console.log('skip town, you may die')
}


if (temp > 85) {
	console.log('skip town, you may die')
}
else if (temp > 65) {
	console.log('wear shorts')
}
else if (temp > 45) {
	console.log('wear a sweater')
}
else if (temp > 32) {
	console.log('wear a coat')
}
else {
	console.log('wear a coat and a scarf')
}

if (temp === 35) { // this checks to see if temp is indeed storing 35 or not
	console.log('temp is 35')
}

let shouldIWearACoat;
if (temp < 45) {
	shouldIWearACoat = true;
}
else {
	shouldIWearACoat = false;
}

const shouldIWearACoat2 = (temp < 45) ? true : false;

// remember, temp is 35 in this case
console.log(temp === 31); // false
console.log(temp > 30); // true
console.log(temp < 30); // false
console.log(temp !== 31); // true
console.log(temp !== 35); // false

console.log(!true); // false
console.log(!false); // true

// && -> this is the and operator

const isItRaining = false;

if (temp > 45 && !isItRaining) { // if BOTH of these expressions are true, go into the if statement
	console.log('it is nice out!')
}


const height = 55;
const age = 13;

// || -> this is the OR operator, found below the right hand delete button
if (height < 60 || age < 13) { // if EITHER of these epxressions are true, it will go into the if statement
	console.log('sorry you cannot go on the ride')
}


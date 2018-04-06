/******************
Temperature Converter Celsius to Fahrenheit

Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.

Convert it to fahrenheit and output "NN°C is NN°F".
******************/

// preferred way
const celsiusToFahrenheit = (a,b,c) => {

}

/*
fat arrow syntax gives us some nice syntactic sugars:

1. if we have a function with one parameter only

const func = (param1) => {
	return param1 + 'some value' + 'etc'
}

func('a') // 'asome valueetc'
func('b') // 'bsome valueetc'

BUT we can also do this: (notice how there is no parens in the below example)

const func = param1 => {
	
}

2. if we have a function that is only ONE line that returns something...

const sum = (a,b) => {
	return a + b;
}

we can also write like this: (we are able to omit the {} and the return keyword)

const sum = (a, b) => a + b

*/

/*

// alternate way 1
function celsiusToFahrenheit(a,b,c) {
	return 1
}

// alternate way 2
const celsiusToFahrenheit = function(a,b,c) {
	return 1
}

*/
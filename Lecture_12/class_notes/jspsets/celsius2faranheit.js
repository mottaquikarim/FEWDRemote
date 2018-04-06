/******************
Temperature Converter Celsius to Fahrenheit

Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.

Convert it to fahrenheit and output "NN°C is NN°F".
******************/

// preferred way
const celsiusToFahrenheit = (celsius) => {
	const F = 1.8 * celsius + 32
	return F; // this means stop, leave, go away
			  // essentially end execution of the function no matter where you are
			  // this means go to the ending curly bracket
}

console.log('return value of function is...', celsiusToFahrenheit(0))
console.log('return value of function is...', celsiusToFahrenheit(100))
console.log('return value of function is...', celsiusToFahrenheit(5))
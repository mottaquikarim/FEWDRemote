/*
	problem statement

	// login form
	const emailAddr = 'abc@gmail.com';

	// ...

	// signup form
	const emailAddr = 'def@gmail.com';

*/


// this will throw an error because we never
// declare words in the first place!

// const speak = (words) => {
//     console.log(words);
//     return true;
// }

// console.log(words);

const newWords = 'will this work?';

const speak = (words) => {
    const newWords = "Test " + words; // Test test
}

const f = speak('test')
console.log(newWords); // will this work?



let a = 1;

const func = () => {
	a = 5;

	return 1;
}

const g = func();
console.log(a) // 5



/*
	SCOPE
	if inside a function we create a variable
		with const or let attribute
		THEN it is LOCAL to that function meaning
		it will be created when function is invoked
		andit will be destroyed when function is complete

	if inside a function we reference use or update a vriable
		WITHOUT const or let attribute
		THEN it will look OUTSIDE thr function for a declaration
		if found, it will update THAT OUTSIDE variable
		if not found, it will throw an error

*/

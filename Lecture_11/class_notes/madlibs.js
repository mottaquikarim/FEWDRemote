const adjective = 'handsome';
const nationality = 'italian';
const person = 'Mario';

const madlib = `Pizza was invented by a(n) ${adjective} ${nationality} 
chef named ${person}.`

console.log(madlib);

const adjective1 = 'talented';
const nationality1 = 'chinese';
const person1 = 'Obama';

const madlib1 = `Pizza was invented by a(n) ${adjective1} ${nationality1} 
chef named ${person1}.`

console.log(madlib1);


// declaring a fucntion / defining a function
// () is the PARAMETER LIST - equiv to the ingredients
// { ... } - the function BODY lives here
//         - equiv to the STEPS to follow in order to
//         - bake cake
// NOTE: variables defined within a function
//       *usually* do not conflict with variables
//       defined *OUTSIDE* the function
// return - output of the function!

const makeMadLib = (adj, nat, person) => {
    const madlib = `Pizza was invented by a(n) ${adj} ${nat} 
chef named ${person}.`

    return madlib;
}

console.log('-----------------------')
console.log(typeof makeMadLib)
console.log(typeof makeMadLib())
console.log('-----------------------')

// ^^ we call this a function statement


// INVOKE the function
// put function_name('a', 'b', 'c') <- like so
// where 'a', 'b', and 'c' correspond to the 
// PARAMETERS of the function
// we call these guys ('a', 'b', 'c') ARGUMENTS
const v1 = makeMadLib('handsome', 'italian', 'Mario')
// ^ when we invoke a function, it is essentially an
// expression, equivalent to 1+1
const a = 1 + 1
// when we CALL a function, that expression EVALUATES TO
// the return statement
console.log(v1)
console.log(makeMadLib('a', 'b', 'c'))
console.log(makeMadLib('a', 'b', 'c'))
console.log(makeMadLib('a', 'b', 'c'))
console.log(1+1)
console.log(1+1)
console.log(1+1)














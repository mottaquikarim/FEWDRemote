/*
# Class Notes

## Programmaing concepts

### Declarations

- we *declare* variables that store information
- later one, we can inspect the value that we stored in that variable


num_yogurt_cans = 5

...

access num_yogurt_cans

**DATA TYPES**

* numbers: 5, -18, 9.123
* strings: text - "this is a bit of text, or in other words it is a string"
* boolean: true or false - true, false
* list: collection of any other valid datatype
* dictionary: association between word and value

For example:

```
grades = ['A', 'B', 'C', 'D', 'F']
```

```
ages = [27, 22, 23, 35]
```

```
[ [], [], [] ]
```

```
{
	'conflagration': 'fire',
	'nefarious': 'mal intent',
	'benevolent': 'harboring good wil'
}

quiz_results = {
	'A': 4,
	'B': 8,
	'C': 5,
	'D': 0,
	'F': 1,
}
```


### Expressions

Expressions have two parts:
- datatype
- operator

expressions will evaluate to a new value

2 + 2 -> the definition of `+` in programming is to add

arithmetic operators:
will take the NUMBER datatype and perform operations on them...

* 2+2 evaluate to 4

num_eggs = 2
num_cheese_slices = 2

num_eggs + num_cheese_slices <- 4

total_stuff_for_omlte = num_eggs + num_cheese_slices 

total_stuff_for_omlte -> 4

**number datatype's operators:**

- +
- - (subtraction)
- *
- /
- %  -> evaluates to the REMAINDER
		4 / 2 = 2
		4 % 2 = 0
		4 / 3 = 1.33333333
		4 % 3 = 1


**string datatype's operators:**

- + -> "a" + "b" = "ab" ... we call this string concatenation

**boolean datatype's operators:**

- >
- <
- >= (less than or equal to)
- <= (greater than or equal to)
- == (equal to)
- != (not equal to)


1 > 2 -> false 

current_temp = 32
warm_temp = 55

isItColdOutside = current_temp >= warm_temp -> false


### Statements

conditional statement example
```
if (1 > 2) {
    // this code will never run
}
else {
    // this code will always run
}
```

loop statement
counter = 0
while (counter < 5) {
    // run code here
    
    counter = counter + 1
}

function statement
calculateAverage(list) {
    // somehow compute the average of a list
}
...
calculateAverage([1,2,3,4,5])



*/

/* pseudocode
Declare F = 32;
Expression ( F - 32 ) / 1.8;
Declare C = Evaluated expression from [2]
*/

const F = 32;
const C = (F - 32) / 1.8;

console.log("F is: ", F, "and C is: ", C)

```
/*
    Create the pseudocode for a rock, paper, scissors game
    
    assumptions:
    declare two variables, P1 and P2
    
    based on the choice of P1 and P2, compute the winner (P1 or P2?)
*/

```

```
/*
	
	DECLARE P1 = ('r', 'p', 's')
	DECLARE P2 = ('r', 'p', 's')


	if (p1 == p2) {
		DECLARE outcome = tie
	}

	if (p1 == 'r' and p2 == 'p') {
		DECLARE outcome = p2
	}
	if (p1 == 'r' and p2 == 's') {
		DECLARE outcome = p1
	}

	if (p1 == 'p' and p2 == 'r') {
		DECLARE outcome = p1
	}
	if (p1 == 'p' and p2 == 's') {
		DECLARE outcome = p2
	}

	if (p1 == 's' and p2 == 'r') {
		DECLARE outcome = p2
	}
	if (p1 == 's' and p2 == 'p') {
		DECLARE outcome = p1
	}


*/
```

Approach 2

```
/*
	
	DECLARE P1 = ('r', 'p', 's')
	DECLARE P2 = ('r', 'p', 's')


	if (p1 == p2) {
		DECLARE outcome = tie
	}
	
	if (p1 == 'r' and p2 == 'p' OR p1 == 'p' and p2 == 's' OR p1 == 's' and p2 == 'r') {
		DECLARE outcome = p2
	}
	else {
		DECLARE outcome = p1
	}

*/
```


















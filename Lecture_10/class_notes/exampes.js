// datatypes

'hello' <- string
54 <- number
true <- boolean

'53' <- string
'true' <- string

// expression

1 + 2

3 > 4

2 - 1

// statements
// -> facillitate control flow
// -> this means statements can determine which blocks of code run, when


// conditional statement
a = 2
b = 3
if (a > b) {
	// run this code
}
else {
	// run this code if top condition is not true
}

// >--------------------------------

// loop statement
while (1 < 3) {
	// run code here, runs infinitely
}

// what if we do this?
increment = 1
end = 3

while (increment < end) {
	increment = increment + 1
}

a = 1
b = 1

// >--------------------------------

// function statement
// this is a formula, the program will see that it
// is being defined but will NOT go inside the curly bracket
function determinant(a,b,c) {
	return sqrt(b*b - 4*a*c)
}

function cube_number(a) {
	return a * a * a
}

function getFullName(firstName, lastName) {
	return firstName + " " + lastName
}

...

sum = 1 + 2 // -> 3

ans = determinant(1, 2, 3)

ans2 = determinant(5, 6, 7)

five_cubed = cube_number(5)

myNameIs = getFullName('Taq', 'Karim')

// myNameIs -> Taq Karim


/*
*ASSUMPTIONS*:

1. there is a variable `user_temp` which is set to a user's preferred temperature
2. there is a function `get_current_temp` which will get us current temp in room
3. there are functions `turn_on_heat` and `turn_of_heat` which can be leveraged to regulate room temp

*/

DECLARE user_temp = 65
while (true) {
	DECLARE temp_now = get_current_temp()

	if (user_temp == temp_now) {
		// do nothing
	}
	else if (user_temp < temp_now) {
		turn_off_heat()
	}
	else {
		turn_on_heat()
	}	

	WAIT(10)
}



// ARRAYS/LISTS

heights = [61, 60, 66, 45, 54] // a list of numbers
names = ['taq', 'courtney', 'arohan', 'sarah'] // a list of strings
doesIdentifyAsFemale = [true, false, false, false] // a list of booleans
lolJustAnExample = [ [1,2], ['a', 'b'], [true], [false] ]

describeTaq = ['Taq', 'Karim', 27, 60, true]


// DICTIONARY/OBJECT

catSibling = {
	'firstName': 'Pandora',
	'lastName': 'Lee',
	'breed': 'tortoise shell',
	'age': 11,
	'isChubby': true,
}

myCat = {
	'firstName': 'Annabelle',
	'lastName': 'Lee',
	'breed': 'tortoise shell',
	'age': 11,
	'isChubby': true,
	'sibling': [catSibling]
}

























let i = 0;
while (i < 5) {
    console.log('IN WHILE LOOP', i)
    i = i + 1;
}

for (i = 0; i < 5; i = i+1) {
  console.log('IN FOR LOOP', i);
}
//what should we see?

/*
    for(START CONDITION; CONTINUE IF TRUE CONDITION; AT EACH ITERATION DO THIS) {
        
    }
*/
console.log('------------------')

const chars = ['a', 'b', 'c'];
// go through items in chars array with a while Loop
i = 0;
while (i < chars.length) {
    console.log("IN WHILE LOOP", chars[i])
    i = i + 1;
}

// go through items in chars array with a for loop
for(i = 0; i < chars.length; i++) {
    console.log("IN FOR LOOP", chars[i])
}


// GIVEN THIS TEST SCORES ARRAY
const testScores = Array.from(Array(10).keys()).map(k => Math.floor(Math.random()*100));
console.log(testScores)
// write a for loop that will add EACH item in the array
// and then after that for loop is done, calculate the average score in class

/*
const foo = () => {
    // defer this line until later
}

if (true) {
    // run this line...
}
else {
    // ...but not this line
}

LOOPS
{
    // run this line over and over again N times
}
*/

let i = 0;
while (i < 5) {
    // console.log('im here!', i)
    i = i + 1;
}
// go one with your life now...

const testScores = [100, 95, 45, 76, 88, 92, 93];
console.log(testScores)
// console.log('test score is:', testScores[0])
testScores[0] = 98

// console.log('test score is:', testScores[0])
// console.log('test score is:', testScores[1])
// console.log('test score is:', testScores[2])
// console.log('test score is:', testScores[3])
// console.log('test score is:', testScores[4])
// console.log('test score is:', testScores[5])
console.log(testScores.length)

let j = 0;
while (j < testScores.length) {
    console.log('test score LIVE FROM WHILE LOOP is:', testScores[j])
    j = j + 1;
}

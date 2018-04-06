/*
    @function doMath
    @param firstNum {number} 
    @param secondNum {number}
    @param thirdNum {number}
    @returns {number}
    @description takes firstNum, adds it to secondNum
                 then multiplies sum to thirdNum
                 returns that computed value
    @example doMath( 1,2,3 ); // 9
*/

const doMath = (firstNum, secondNum, thirdNum) => {
	return (firstNum + secondNum) * thirdNum;
}

//const doMath_tersely = (a, b, c) => (a + b) * c;

console.log(doMath(1,2,3))

console.log(doMath(3,4,5)) // 35



/*
    @function addMiddleName
    @param firstName
    @param middleName
    @param lastName
    @returns {string}
    @description takes the first and last name
                 adds middle name in between
                 returns the new string
                 if no middle name exists, just 
                 return firstname and last name
    @example addMiddleNmae('John', 'Mabel', 'Smith'); // John Mabel Smith
*/

const addMiddleName = (firstName, middleName, lastName) => {
	return `${firstName} ${middleName} ${lastName}`
}

console.log(addMiddleName('John', 'Mabel', 'Smith'))


/*
    @function defaultPlaceholder
    @param placeholder {string}
    @returns {string}
    @description takes an HTML string and replaces placeholder content with 
                 the placholder argument passed in
    @example defaultPlaceHolder('Hello Wrold!'); 
             // <input type="text" placeholder="Hello Wrold!" />
*/

const defaultPlaceholder = (placeholder) => {
	return `<input type="text" placeholder="${placeholder}" />`
}

const defaultPlaceholder_terse = placeholder => `<input type="text" placeholder="${placeholder}" />`

console.log(defaultPlaceholder('WILL THIS WORK THO'))








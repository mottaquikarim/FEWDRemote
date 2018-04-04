// Hi, let's describe your characteristics

/*
    P1:
    Create a variable called `myFullName` 
    that stores your full name as a variable

*/

const myFullName = 'Mottaqui Karim'
console.log(myFullName)


// -------------------------------------------
/*
    P2:
    Create a variable called `myHeight`
    that represents your height in inches

*/
const myHeight = 60;
console.log(myHeight);

// -------------------------------------------
/*
    P3:
    Create a variable called `myBirthYear`
    that stores your year of birth

*/

const myBirthYear = 1990;
console.log(myBirthYear)

// -------------------------------------------
/*
    P4:
    Create a variable called `currentYear`
    that stores current year

*/

const currentYear = 2018;
console.log(currentYear)

const currentYear_2 = new Date().getFullYear();
console.log(currentYear_2)

// -------------------------------------------
/*
    P5:
    Create a variable called `myAge`
    that computes your current age
    from `myBirthYear` and `currentYear`

*/

const myAge = currentYear - myBirthYear;
console.log(myAge)


console.log(Math.abs(myBirthYear - currentYear))
// -------------------------------------------
/*
    P6:
    Create a string called `myDescription`
    that incorporates the values above 
    into a small string description about you
    
    ie: Hello, my name is [fullName] and I am [myHeight]...
    etc
    

*/

const myDescription = `Hello, my name is ${myFullName} and I am

${myHeight} inches tall`;

console.log(myDescription)

const myDescription2 = "Hello, my name is " + myFullName + " and I am \n\n" +
    myHeight + " inches tall";
    
console.log(myDescription2)

// -------------------------------------------



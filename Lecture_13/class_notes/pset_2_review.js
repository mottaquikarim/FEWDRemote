/*
    @func childrensSubtraction
    @param {number} a
    @param {number} b
    returns {number || boolean}
    @desc - write a function that helps a 3rd grader do his math hw
            they haven't learned about integers yet, 
            
            so subtracting a - b when a < b is impossible in their world
            
            IF a < b, return false
            otherwise, compute the difference and return that instead
            
    @example childrensSubtraction( 1, 2 ); // false
    @example childrensSubtraction( 2, 1 ); // 1
    @example childrensSubtraction( 2 ); // "ERROR: b is not defined"
*/

const childrenSubtraction = (a,b) => {
    // ensure that b is a defined value
    if (typeof b === "undefined") {
        return "ERROR: b is not defined"
    }
    if (typeof a !== "number" || typeof b !== "number") {
        return "ERROR: a,b must both by type numbers"
    }
    // ensure that a is > b, if not return false
    if (a < b) {
        return false;
    }
    // just return the diff, if we are here
    // then a, b are valid and a > b
    return a - b;
}

console.log(childrenSubtraction(1,2))
console.log(childrenSubtraction( 2, 1 ))
console.log(childrenSubtraction(2))
console.log(childrenSubtraction(2, 'this is nonsense'))
console.log(childrenSubtraction('this is sparta', 2))


/*
    @func shouldTakeUmbrella
    @param {number} chanceOfRain
    @returns {boolean}
    @desc - if `chanceOfRain` > 0.5, return true
            if `chanceOfRain`  > 1, return 
                "ERROR: chanceOfRain must be less than 1"
                
    @example shouldTakeUmbrella(0.4); // false
    @example shouldTakeUmbrella(0.8); // true
    @example shouldTakeUmbrella( 9 ); // "ERROR: chanceOfRain must be less than 1"
    @example shouldTakeUmbrella(); // "ERROR: chanceOfRain must be less than 1"
    @example shouldTakeUmbrella( -8 ); // "ERROR: chanceOfRain must be greater than 0"
    @example shouldTakeUmbrella( -0.3 ); // "ERROR: chanceOfRain must be greater than 0"
*/

// const shouldTakeUmbrella = (chanceOfRain) => {
//     if(chanceOfRain > 1 || typeof chanceOfRain === "undefined") {
//         return "ERROR: chanceOfRain must be less than 1";
//     }
    
//     if(chanceOfRain < 0) {
//         return "ERROR: chanceOfRain must be greater than 0"
//     }
    
//     return chanceOfRain > 0.5;
// }

const shouldTakeUmbrella = (chanceOfRain = 2) => {
    if (typeof chanceOfRain !== "number") {
        return "ERROR: we expect chanceOfRain to be a number between 0 and 1";
    }
    
    if(chanceOfRain > 1) {
        return "ERROR: chanceOfRain must be less than 1";
    }
    
    if(chanceOfRain < 0) {
        return "ERROR: chanceOfRain must be greater than 0"
    }
    
    return chanceOfRain > 0.5;
}

// @TODO: uncomment to see output
// console.log(shouldTakeUmbrella(0.4))
// console.log(shouldTakeUmbrella(0.8))
// console.log(shouldTakeUmbrella(9))
// console.log(shouldTakeUmbrella('hi hello this is a string'))
// console.log(shouldTakeUmbrella( -8 ))
// console.log(shouldTakeUmbrella( -0.3 ))


/*
    @func isNameTooLong
    @param {string} name
    @returns {boolean}
    @desc if name has a length > 16, return true
    
    @example isNameTooLong('Mottaqui A. Karim'); // true
    @example isNameTooLong('John Smith'); // false
*/

// const isNameTooLong = (name) => {
//     if (name.length > 16) {
//         return true;
//     }
//     else {
//         return false;    
//     }
// }

// const isNameTooLong = (name) => {
//     if (name.length > 16) {
//         return true; // return means EXIT function entirely
//     }
    
//     return false;    
// }

const isNameTooLong = (name) => {
    return name.length > 16;
}

// const isNameTooLong = name => name.length > 16;

// @TODO: uncomment to see output
// console.log(isNameTooLong('Mottaqui A. Karim'));
// console.log(isNameTooLong('Taq Karim'));



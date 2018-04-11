/*
    @func average
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            find average of all numbers
    @example - average([1,2,3,4]); // 2.5
*/

const average = (arr) => {
    // initialize variable sum = 0
    // for loop
    let sum = 0;
    
    for(let i = 0; i < arr.length; i = i + 1) {
        // console.log('------------------')
        // console.log('BEFORE: sum=', sum, `arr[${i}]`, arr[i]);
        sum = sum + arr[i];
        // console.log('AFTER: sum=', sum, `arr[${i}]`, arr[i]);
        // console.log('------------------')
    }
    
    // let sum_for_while_loop = 0;
    // i = 0;
    // while( i < arr.length) {
    //     sum = sum + arr[i];
    //     i = i + 1;
    // }
    
    console.log('SUM is', sum)

    return sum / arr.length;
}

console.log(average([1,2,3,4]))

const cpy = (arr) => {
    const arr_cpy = [];
    for(let i = 0; i < arr.length; i++) {
        arr_cpy[i] = arr;
        // console.log(arr[i], arr)
    }
    
    console.log('arr_cpy=', arr_cpy)
    return [];
}

console.log(cpy([1,2,3,4]))






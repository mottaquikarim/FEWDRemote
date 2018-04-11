const isGreaterThan5 = (i) => {
    if (i > 5) {
        return true;
    }
    else {
        return false;
    }
};

console.log(isGreaterThan5(8));
console.log(isGreaterThan5(-8));

const isGreaterThan5AndEven = (i) => {
    if (i > 5 && i % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
};

console.log(isGreaterThan5AndEven(7))
console.log(isGreaterThan5AndEven(8))

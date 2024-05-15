// This is my function that sums two numbers
const sum = (a, b) => {
    return a + b;
}

// Just a console log for ourselves
console.log(sum(7, 3));

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Function to convert from Euro to Dollar
function fromEuroToDollar(eur) {
    return eur * oneEuroIs.USD;
}

console.log(fromEuroToDollar(1));

function fromDollarToYen(dollars){
    return 156.5 * dollars / 1.07
}

console.log(fromDollarToYen(3.5));

function fromYenToPound(yen){
    return yen * 0.87 / 156.5
}

console.log(fromYenToPound(1000))

// Export the functions to be used in other files
module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};

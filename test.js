// Import the function sum from the app.js file
// Start your first test
test('adds 14 + 9 to equal 23', () => {

    const { sum } = require('./app.js');
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});
 
test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 146.26168224299064 yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yen = fromDollarToYen(3.5);

    // If 1.07 dollars is 156.5 yen, then 3.5 dollars should be (156.5 * 3.5 / 1.07) yen
    const expected = 156.5 * 3.5 / 1.07; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(511.91588785046724); // 
})

test("1000 yen should be 5.559105431309904 pounds", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const pounds = fromYenToPound(1000);

    // If 0.87 british poinds are 156.5 yen, then 1000 yen should be (1000 * 0.87 / 156.5) pounds
    const expected = 1000 * 0.87 / 156.5; 
    
    // This is the comparison for the unit test
     expect(fromYenToPound(1000)).toBe(5.559105431309904); // 
})
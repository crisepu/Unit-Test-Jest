const { sum } = require('./app.js');

test('add 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function () {
    const { fromEuroToDollar } = require('./app.js');
    expect(fromEuroToDollar(3.5)).toBe(4.20);
});

test("One euro should be 127.9 yens", function() {
    const {fromEuroToYen} = require('./app.js');
    expect(fromEuroToYen(3.5)).toBe(447.65);
});

test("One euro should be 0.8 pounds", function() {
    const {fromEuroToPounds} = require('./app.js');
    expect(fromEuroToPounds(3.5)).toBe(2.80);
});
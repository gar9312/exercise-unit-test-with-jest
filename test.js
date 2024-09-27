const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});

test("One dollar should be 156.5 yen", function() {
    const yen = fromDollarToYen(1);
    const expected = 156.5; // 1 dólar son 156.5 yenes
    expect(yen).toBe(expected);
});

test("One yen should be 0.0055 pounds", function() {
    const pounds = fromYenToPound(1);
    const expected = 1 / 156.5 * 0.87; // 1 yen a libras
    expect(pounds).toBeCloseTo(expected, 5);
});



const fromEuroToDollar = function (valueInEuro) {
    let valueInDollar = valueInEuro * 1.2;
    return  Number(valueInDollar.toFixed(2));
}

const fromEuroToYen = function (valueInEuro) {
    let valueInYen = valueInEuro * 127.9;
    return Number(valueInYen.toFixed(2));
}

const fromEuroToPounds = function (valueInEuro) {
    let valueInPounds = valueInEuro * 0.8;
    return Number(valueInPounds.toFixed(2));
}

const sum = (a, b) => {
    return a + b;
}

console.log(sum(7, 3));

module.exports = { sum, fromEuroToDollar, fromEuroToYen, fromEuroToPounds };
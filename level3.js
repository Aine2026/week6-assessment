
function applyDiscount(prices, rule) {
    let discountedPrices = [];

    for (let i = 0; i < prices.length; i++) {
        discountedPrices.push(rule(prices[i]));
    }

    return discountedPrices;
}

// Rule 1: Give 10% off everything
function tenPercentOff(price) {
    return price * 0.90;
}

// Rule 2: Take 5,000 RWF off items over 50,000 RWF
function fiveThousandOff(price) {
    if (price > 50000) {
        return price - 5000;
    }

    return price;
}

const prices = [10000, 50000, 60000, 100000];

console.log("Original prices:", prices);

console.log(
    "10% discount:",
    applyDiscount(prices, tenPercentOff)
);

console.log(
    "5,000 RWF discount:",
    applyDiscount(prices, fiveThousandOff)
);

// let prices = [7,1,5,3,6,4];
let prices = [7,2,6,1,2,8];
// let prices = [7,6,4,3,1];
// let prices = [1,2];
// let prices = [3,2,6,5,0,3];

// My solution
function maxProfit(prices) {
    let min = prices[0];
    let profit = 0;
    for (let i=1; i < prices.length; i++) {
        if ((prices[i] - min) > profit) profit = prices[i] - min;
        if (prices[i] < min) min = prices[i];
    }
    return profit;
}

console.log(maxProfit(prices));
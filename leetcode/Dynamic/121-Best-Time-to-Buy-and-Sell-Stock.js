// 121-Best-Time-to-Buy-and-Sell-Stock.js

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let result = 0;
  for (let i = 0, j = 1; i < prices.length - 1, j < prices.length; j++) {
    if (prices[j] <= prices[i]) {
      i = j;
    } else {
      result = Math.max(prices[j] - prices[i], result);
    }
  }
  return result;
};


// 优解
var maxProfit2 = function(prices) {
    let result = 0;
    let min = prices[0];
    for(let i = 1; i < prices.length; i++) {
        min = Math.min(prices[i], min);
        result = Math.max(result, prices[i] - min);
    }
    return result;
};

console.log(maxProfit([7,1,5,3,6,4]))
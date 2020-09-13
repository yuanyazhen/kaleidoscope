/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const cache = [1, 2];
  for (let i = 2; i < n; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }
  return cache[n - 1];
};

// 斐波那契变形
// 1. 递归，缺点：重复计算太多
// f(n) = f(n-1)+f(n-2); 

const climbStairs = n =>
    Array(n - 1)
	    .fill(0) // Because the reduce function ignores undefined values.
        .reduce(([a, b]) => [b, a + b], [1, 1])
        .pop()
// 41-First-Missing-Positive.js
/**
 * 类似桶排序
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const temp = [1];
  nums.forEach (item => {
    if (item >= 0) {
      temp[item] = 1;
    }
  });

  for (let i = 1; i < temp.length; i++) {
    if (!temp[i]) return i;
  }

  return temp.length;
};
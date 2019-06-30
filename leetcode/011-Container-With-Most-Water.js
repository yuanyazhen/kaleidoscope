/**
 * Runtime: 696 ms
 * Memory Usage: 35.5 MB
 * 时间：O(n^2)
 * 空间：O(1) 常数
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let res = 0;
  for (let i = 0; i < height.length; ++i) {
    for (let j = i; j < height.length; ++j) {
      let k = height[i];
      if (height[j] < k) k = height[j];
      // console.log(i, j, (j - i) * k);
      if ((j - i) * k > res) res = (j - i) * k;
    }
  }
  return res;
};

/**
 * leetcode solusion 2：两个标志从左右两边计算
 * Runtime: 60 ms
 * Memory Usage: 35.7 MB
 * 时间：O(n)
 * 空间：O(1) 常数
 * @param {number[]} height
 * @return {number}
 */
var maxArea_1 = function (height) {
  let maxarea = 0, l = 0, r = height.length - 1;
  while (l < r) {
    maxarea = Math.max(maxarea, Math.min(height[l], height[r]) * (r - l));
    if (height[l] < height[r])
      l++;
    else
      r--;
  }
  return maxarea;
};

const res = maxArea_1([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log(res);
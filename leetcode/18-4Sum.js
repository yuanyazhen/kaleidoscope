/**
 * Runtime: 96 ms
 * Memory Usage: 36.4 MB
 * beats 75.80 %
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const res = [];
  const len = nums.length;
  nums = nums.sort ((a, b) => a - b);

  // p,q,r 三个指针
  let p = 0, q, left = 1, right = len - 1;
  for (p; p < len - 3; ++p) {
    // 优化点 1
    if (p > 0 && nums[p] === nums[p - 1]) continue;
    for (q = p + 1; q < len - 2; ++q) {
      // 优化点 1
      if (q > p + 1 && nums[q] === nums[q - 1]) continue;
      left = q + 1;
      right = len - 1;
      while (left < right) {
        const temp = nums[p] + nums[q] + nums[left] + nums[right];
        if (temp > target) right--;
        if (temp < target) left++;
        if (temp === target) {
          res.push ([nums[p], nums[q], nums[left++], nums[right--]]);
          // 优化点 2
          while (left < right && nums[left] == nums[left - 1])
            left++;
          while (left < right && nums[right] === nums[right + 1])
            right--;
        }
      }
    }
  }
  return res;
};

const res = fourSum ([-1,0,1,2,-1,-4], -1);
console.log (res);

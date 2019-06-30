/**
 * Runtime: 84 ms
 * Memory Usage: 35 MB
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let res = null;
  let resDiff;
  const len = nums.length;
  nums = nums.sort ((a, b) => a - b);

  let p, left, right;
  for (p = 0; p < len - 2; p++) {
    // 加上后 Runtime: 48 ms，Memory Usage: 34.6 MB，beats 99.2%；
    if(nums[p] === nums[p-1]) continue;

    left = p + 1;
    right = len - 1;
    while (left < right) {
      const temp = nums[p] + nums[left] + nums[right];
      const diff = Math.abs (temp - target);
      resDiff = Math.abs (res - target);
      if (res === null || resDiff > diff) {
        res = temp;
      }
      if (target > temp) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
};

const res = threeSumClosest ([0, 2, 1, -3], 1);
console.log (res);

/**
 * Time Limit Exceeded
 * 三层循环 is ok
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = []

  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
      for (let k = j + 1; k < nums.length; ++k) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const isExist = res.some(item => {
            return item.join('') === (`${nums[i]}${nums[j]}${nums[k]}`);
          })
          !isExist && res.push([nums[i], nums[j], nums[k]])
        }
      }
    }
  }
  return res;
};

/**
 * Runtime: 332 ms
 * Memory Usage: 56.3 MB
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum_1 = function (nums) {
  const res = new Set();
  nums = nums.sort((a, b) => a - b);

  // p,q,r 三个指针
  let p = 0, q = 1, r = nums.length - 1;
  for (p; p < nums.length - 2; ++p) {
    q = p + 1;
    r = nums.length - 1;
    while (q < r) {
      const temp = nums[p] + nums[q] + nums[r];
      if (temp > 0) r--;
      if (temp < 0) q++;
      if (temp === 0) {
        res.add(`${nums[p]},${nums[q]},${nums[r]}`);
        r--;
        q++;
      }
    }
    if (p === r && nums[p] + nums[q] + nums[r] > 0) break;
  }
  return [...res].map(item => item.split(','));
};

/**
 * 优化点：过滤重复
 * Runtime: 152 ms
 * Memory Usage: 47.2 MB
 * 。。。快了一半
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum_2 = function (nums) {
  const res = [];
  const len = nums.length;
  nums = nums.sort((a, b) => a - b);

  // p,q,r 三个指针
  let p = 0, q = 1, r = len - 1;
  for (p; p < len - 2; ++p) {
    // 优化点 1
    if (p > 0 && nums[p] === nums[p - 1]) continue;

    q = p + 1;
    r = len - 1;
    while (q < r) {
      const temp = nums[p] + nums[q] + nums[r];
      if (temp > 0) r--;
      if (temp < 0) q++;
      if (temp === 0) {
        res.push([nums[p], nums[q++], nums[r--]]);
        // 优化点 2
        while (q < r && nums[q] == nums[q - 1]) q++;
        while (q < r && nums[r] === nums[r + 1]) r--;
      }
    }
    if (p === r && nums[p] + nums[q] + nums[r] > 0) break;
  }
  return res;
};

const res = threeSum_2([-1, 0, 1, 2, -1, -4]);
console.log(res)
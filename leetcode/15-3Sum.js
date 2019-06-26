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

const res = threeSum_1([-1,0,1,2,-1,-4]);
console.log(res)
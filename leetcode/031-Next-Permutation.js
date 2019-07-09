/**
 * Runtime: 64 ms
 * Memory Usage: 34.8 MB 
 * beats 82.96 % 
 * 1. 先取出前一个数小于后一个数位置，2.交换与其相近的数，3.后续的数进行排序。
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  for (let i = nums.length - 2; i >= 0; --i) {
    // 先求出后一个数大于前一个数
    if (nums[i + 1] > nums[i]) {
      // i 到 nums.length-1 插入排序
      // 找到比其大一点的数并排序
      let j = i + 1;
      while (j < nums.length - 1) {
        if (nums[i] < nums[j] && nums[i] >= nums[j + 1]) {
          break;
        }
        j++;
      }
      swap(nums, i, j);
      // sort
      sort(nums, i + 1, nums.length - 1);
      break;
    }
    if (i === 0) {
      // sort
      sort(nums, i, nums.length - 1);
      break;
    }
  }
  return nums;
};

function sort(nums, p, q) {
  for (p, q; q > p; p++ , q--) {
    swap(nums, p, q)
  }
}

function swap(nums, index1, index2) {
  const temp = nums[index1];
  nums[index1] = nums[index2];
  nums[index2] = temp;
}

const res = nextPermutation([1, 5, 1]);
console.log(res);
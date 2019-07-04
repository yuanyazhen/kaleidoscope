// 046-Permutations

/**
 * Runtime: 56 ms
 * Memory Usage: 36.4 MB
 * beats 99.27 %
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
    const results = [];
    permuteDsf(nums, 0, results);
    return results;
};

function permuteDsf(nums, start, results) {
    // 最后一个元素，前面已经排列好
    if(start === nums.length - 1) results.push([...nums]);

    for(let i = start; i < nums.length; ++i) {
        // 将第一个元素分别与后面的元素进行交换
        swap(nums, start, i)
        permuteDsf(nums, start + 1, results)
        swap(nums, start, i)
    }
}

function swap(nums, index1, index2) {
    const temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
}

const res1 = permute([1, 2, 3]);
console.log(res1);

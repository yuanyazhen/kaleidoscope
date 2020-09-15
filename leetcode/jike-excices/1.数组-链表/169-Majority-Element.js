/**
 * 对象存储：key 和 次数
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let max = 0, result = nums[0];
    nums.reduce((pre, item) => {
        pre[item] = (pre[item] || 0) + 1;
        if(pre[item] > max) {
            max = pre[item];
            result = item;
        }
        return pre
    }, {});
    return result;
};

var majorityElement2 = function(nums) {
    
    const hash = {}
    let max = 0, val
    
    for (let i = 0; i < nums.length; i++){
        hash[nums[i]] ? hash[nums[i]]++ : hash[nums[i]] = 1
        if (hash[nums[i]] > max){
            max = hash[nums[i]]
            val = nums[i]
        }
    }
    
    return val
};

var majorityElement3 = function(nums) {
    // sort the array and the middle is the majority
    nums.sort((a,b) => a - b);
    return nums[Math.floor(nums.length/2)];
}; 
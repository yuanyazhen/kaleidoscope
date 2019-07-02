/**
 * 递归 DFS:深度优先算法
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var result = [];
    getPermute(0);
    return result;

    function getPermute(index){
        if(index === nums.length){
            result.push(nums.slice(0));
            return;
        }
        for(var i = index; i < nums.length; i++){
            switchNum(i, index);
            getPermute(index + 1);
            switchNum(i, index);
        }
    }
    function switchNum(i, j){
        if(i === j) return;
        var tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
};

const res1 = permute([1,2,3]);
console.log(res1);
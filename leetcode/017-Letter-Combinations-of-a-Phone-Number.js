/**
 * 总算有一个跑完时间比较短的了。。
 * Runtime: 44 ms
 * Memory Usage: 33.9 MB
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const map = new Map();
    let j = 2;
    for (let i = 97; i <= 122; i) {
        if (j === 9 || j === 7) {
            map.set('' + j++, new Array(4).fill(0).map(item => String.fromCharCode(i++)))
        } else {
            map.set('' + j++, new Array(3).fill(0).map(item => String.fromCharCode(i++)))
        }
    }
    // 合并成二维数组，然后从左到右两两合并
    const digitsArr = digits.split('').map(item => map.get(item));
    const res = digitsArr.reduce((pre, item) => {
        if (pre.length === 0) return pre = item;
        let temp = []
        for (let i = 0; i < pre.length; i++) {
            for (let j = 0; j < item.length; j++) {
                temp.push(`${pre[i]}${item[j]}`)
            }
        }
        return temp;
    }, []);
    return res;
};

const res = letterCombinations('29');
// console.log(String.fromCharCode(86));
console.log(res);
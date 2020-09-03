/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const len = needle.length;
    for(let i = 0; i < haystack.length - len + 1; i++) {
        const sub = haystack.slice(i, i + len);
        if(sub == needle) {
            return i
        }
    }
    return -1;
};

/**
 * and 霜层循环
 */

console.log(strStr('hello', 'll'));
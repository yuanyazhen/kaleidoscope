// 32-Longest-Valid-Parentheses.js

/**
 * 暴力解法：从第一个开始遍历，求出符合条件的最长
 * 时间复杂度 O(n2)
 * Time Limit Exceeded 超时
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let max = 0, right = 0;
    for (let i = 0; i < s.length - 1;) {
      for (let j = i + 1; j < s.length; j++) {
        const isValid = isValidParentheses (s.slice (i, j + 1));
        if (isValid) {
          max = Math.max (max, j - i + 1);
          right = j;
        }
      }
      // 优化后 O(n * k)
      i = right + 1;
    }
    return max;
  };
  
  var isValidParentheses = function (s) {
    const stack = [];
    const map = {
      '(': ')',
    };
  
    for (let i = 0; i < s.length; i++) {
      let c = s[i];
      if (map[c]) {
        stack.push (map[c]);
      } else if (c !== stack.pop ()) {
        return false;
      }
    }
  
    return !stack.length;
  };
  
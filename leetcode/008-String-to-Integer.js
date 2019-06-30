// 08-String-to-Integer.js

/**
 * Runtime: 80 ms
 * Memory Usage: 36.6 MB
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  const max = Math.pow (2, 31) - 1;
  const min = -Math.pow (2, 31);

  str = str.trim ();

  let collect = '';
  for (let i = 0; i < str.length; ++i) {
    if (i === 0 && ['+', '-'].includes (str[i])) {
      collect += str[i];
    } else if (str[i] >= '0' && str[i] <= '9') {
      collect += str[i];
    } else {
      break;
    }
  }

  return Math.max (Math.min (Number (collect) || 0, max), min);
};

/**
 * 很赞的方法，学习了！
 * @param {*} str  does not use parseInt
 */
var myAtoi_1 = function (str) {
  const [, sign, digits] = str.match(/\s*(\+|-)?(\d*)\s*/);
  if (!digits) {
    return 0;
  }
  let num = 0;
  for (let i = 0, len = digits.length; i < len; i++) {
    num += digits.charAt(i) * 10 ** (len - 1 - i);
  }
  if (num > 2 ** 31 - 1) {
    return sign === '-' ? -2147483648 : 2147483647;
  }
  return (num = sign === '-' ? -1 * num : num);
};

const res = myAtoi ('--');
console.log (res);

// 012-Integer-to-Roman.js

/**
 * 思路：循环求余，拿到后判断 1，5，10 的左右组合以及次数
 * Runtime: 140 ms
 * Memory Usage: 41.9 MB
 * beats 84.41 % 
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const romanMap = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
  };
  let i = 0;
  let res = '';
  while (num) {
    let remainer = num % 10;
    // 判断一，五，十的左右组合
    // if 0, do nothing
    if (remainer < 4) {
      while (remainer--) {
        res = `${romanMap[10 ** i]}${res}`;
      }
    } else if (remainer === 4) {
      res = `${romanMap[10 ** i]}${romanMap[5 * 10 ** i]}${res}`;
    } else if (remainer === 5) {
      res = `${romanMap[5 * 10 ** i]}${res}`;
    } else if (remainer > 5 && remainer < 9) {
      remainer -= 5;
      while (remainer--) {
        res = `${romanMap[10 ** i]}${res}`;
      }
      res = `${romanMap[5 * 10 ** i]}${res}`;
    } else if (remainer === 9) {
      res = `${romanMap[10 ** i]}${romanMap[10 * 10 ** i]}${res}`;
    } else if (remainer === 10) {
      res = `${romanMap[10 * 10 ** i]}${res}`;
    }
    num = parseInt (num / 10);
    i++;
  }
  return res;
};

/**
 * 思路：列出数字全集，一次性获取
 * beats 92.50 %
 * @param {*} n 
 */
var intToRoman_1 = function (n) {
    const M = ["", "M", "MM", "MMM"];
    const C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    return M[Math.floor(n / 1000)] + C[Math.floor(n / 100) % 10] + X[Math.floor(n / 10) % 10] + I[n % 10];
}

const res = intToRoman_1 (321);
console.log (res);

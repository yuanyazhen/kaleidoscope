/**
 * Runtime: 300 ms
 * Memory Usage: 41.3 MB
 * 求最大回文字串
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const sArr = s.split('');
  let res = [];
  for (let i = sArr.length - 1; i > 0; --i) {
    // 遍历字串
    let temp = [];
    for (let m = 0; m < i; ++m) {
      // 判断是否回文，两个指针分别从两头开始判断
      let k = i;
      for (j = m; j < k; ++j) {
        // console.log(j, k);
        if (sArr[j] !== sArr[k]) {
          break;
        }
        --k;
      }
      // console.log('j,k =>', j, k);
      if (j >= k) {
        temp = sArr.slice(m, i + 1);
        break;
      }
    }
    if (res.length < temp.length) {
      res = temp;
    }
  }
  return res.length > 0 ? res.join('') : sArr[0] || '';
};

const res = longestPalindrome("abadd")
console.log(res)
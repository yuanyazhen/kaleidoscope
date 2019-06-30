/**
 * Runtime: 228 ms
 * Memory Usage: 69.1 MB
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;

  // 初始化数组
  const res = new Array(numRows);
  for (let i = 0; i < numRows; i++) {
    res[i] = new Array();
  }

  let len = 0;
  let i = 0, j = 0;
  let row = numRows - 1;
  while (len < s.length) {
    // 按照下标特点，计算下一个下标的位置
    if (i === 0 || (i % row != 0 && j % row === 0)) {
      res[i++][j] = s[len++];
    } else if (i === row || (i % row != 0 && j % row != 0)) {
      res[i--][j++] = s[len++];
    }
  }
  // 如果字符串里面存在逗号，这个方法就 gg 了
  // return res.toString().replace(/,/g, '');
  return res.reduce((pre, item) => ([...pre, ...item.filter(i => i)]), []).join('')
};

/**
 * 解释：http://algorithm.books.mafengshe.com/answer/6.html
 * Runtime: 84 ms
 * Memory Usage: 38.1 MB
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert_1 = function (s, numRows) {
  if (numRows === 1) return s;

  let res = '';
  // 每个 LV 结构有 2*numRows-2 个元素
  let size = 2 * numRows - 2;
  // 遍历每行
  for (let i = 0; i < numRows; ++i) {
    // 每个LV结构第一个元素下标 j；
    for (let j = i; j < s.length; j += size) {
      res += s[j];
      if(i != 0 && i != numRows -1 && (size - i) + (j - i) < s.length) {
        res += s[(size - i) + (j - i)]
      }
    }
  }
  return res;
}

const res = convert_1("PAYPALISHIRING", 3)
console.log(res)
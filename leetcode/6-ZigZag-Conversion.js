/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  const res = new Array(numRows);
  const sArr = s.split('');

  let j, k;
  let i = 0;
  // for(let i = 0; i < sArr.length; ++i) {
    j = 0;
    k = 0;
    while(i < sArr.length) {
      if(j === 0) {
        for(j = 0; j< numRows; ++j) {
          res[j][k] = sArr[++i];
        }
      }
      if(j === numRows -1) {
        for(j; j>=0; --j) {
          res[j][++k] = sArr[++i];          
        }
      }
    }
  return res;
};

const res = convert("aa", 4)
console.log(res)
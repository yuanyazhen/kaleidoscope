/**
 * 各种判断
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let res = 0;
  for(let i = 0; i<s.length; i++) {
      if(s[i] == 'I') {
          if(s[i+1] == 'V') { res += 4; i++; continue;}
          else if(s[i+1] == 'X') { res += 9; i++; continue;}
      } else if (s[i] == 'X') {
        if(s[i+1] == 'L') { res += 40; i++; continue;}
        else if(s[i+1] == 'C') { res += 90; i++; continue;}
    } else if (s[i] == 'C') {
        if(s[i+1] == 'D') { res += 400; i++; continue;}
        else if(s[i+1] == 'M') { res += 900; i++; continue;}
    }

    res += romanMap[s[i]];
  }
  return res;
};

/**
 * 一般小值在右边，整体相加即可；如果左边的值小于右边，整体减去左边的值
 * @param {string} s
 * @return {number}
 */
var romanToInt2 = function (s) {
    const romanMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let res = 0;
    let i = 0;
    for(; i<s.length - 1; i++) {
        if (romanMap[s[i]] >= romanMap[s[i+1]]) {
            res += romanMap[s[i]];
        } else {
            res -= romanMap[s[i]];
        }
    }

    return res += romanMap[s[i]];
  };

console.log(romanToInt2('LVIII'));
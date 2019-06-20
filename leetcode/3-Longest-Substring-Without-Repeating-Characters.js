/**
 * 最长想到的解法，双层循环
 * Runtime: 312 ms，Memory Usage: 41.8 MB
 * @param {string}
 * @return {number}
 */
var lengthOfLongestSubstring_1 = function(s) {
  const wordArr = s.split('');

  let res = [];
  for(let i = 0; i < wordArr.length; ++i) {
    const temp = [wordArr[i]];
    for(let j = i +1; j < wordArr.length; ++j) {
      if(!temp.includes(wordArr[j])) {
        temp.push(wordArr[j]);
      } else {
        break;
      }
    }
    if(temp.length > res.length) {
      res = temp;
    }
  }
  return res.length;
};

/**
 * 跟方法一比较优化点：
 * 从重复字符的下一个字符开始
 * Runtime: 300 ms，Memory Usage: 41.9 MB
 * @param {string}
 * @return {number}
 */
var lengthOfLongestSubstring_2 = function(s) {
  const wordArr = s.split('');

  let res = [];
  let k = 0;
  for(let i = 0; i < wordArr.length; i = i + k + 1) {
    const temp = [wordArr[i]];
    k = 0;
    for(let j = i + 1; j < wordArr.length; ++j) {
      if(!temp.includes(wordArr[j])) {
        temp.push(wordArr[j]);
      } else {
        k = temp.indexOf(wordArr[j]);
        break;
      }
    }
    if(temp.length > res.length) {
      res = temp;
    }
  }
  return res.length;
}

/******* 网上方法 *********/

/**
 * The idea behind this code is to use hash maps to keep track of seen substrings.
Obviously if any string is less than two, the longest substring is equal to the length of that substring.
However, if not, then we would have to consider another approach.

Consider a string:
_ _ _ _ _ a _ _ _ _ _ f _ _ _ f _ _ _ a

Where _ means a distinct character from all the others.

As we transverse the string, we put a character into the hash table if it's not already in there where the key is the character and the value is the index. --> hash = {char: index}

If there character is already in the string, we have to update the index after we do the following procedures:

We have a curr that keeps track of the length of the substring that has not seen an already seen character. As we get to the second f, curr = 16. So, so far the max_len is going to be max(max_len = 0, curr = 16) [Since max_len has yet to be updated].

Now, we start our curr from the character after the first f. curr now becomes the distance between the first f and the second f, which is i - hash[s[i]]. We update the hash and continue.

The max_len is determined by the max of the current max_len and the curr value when it encounters a character already seen.

Finally, we have completely transversed the string and arrived at the max length of the substring that does not have any repeating characters.

Runtime: O(n)
Space Complexity: O(n)
 */

/**
 * Runtime: 104 ms,Memory Usage: 40.5 MB
 * @param {*} s 
 */
var lengthOfLongestSubstring_3 = function(s) {
  let max_len = 0;
  let curr = 0;
  let hash = {}; 
  if(s.length < 2) {
      return s.length;
  }
  for(let i = 0; i < s.length;  i++) {
      if(hash[s[i]] == null) {
          curr += 1;
      } else {
          curr = Math.min(i - hash[s[i]], curr + 1);
      }
      max_len = Math.max(max_len, curr);
      hash[s[i]] = i; //save the index
  }
  return max_len;
};

/**
 * Runtime: 80 ms,Memory Usage: 37.9 MB
 * @param {*} s 
 */
var lengthOfLongestSubstring_4 = function(s) {
  var length = s.length;
  if (length <= 1) {
      return length;
  }
  var p = 0;
  var q = 1;
  var result = 1;
  while (q < length) {
      var sub = s.slice(p, q);
      var i = sub.indexOf(s[q]);
      if (i !== -1) {
          p = p + i + 1;
      }
      q++;
      result = q - p > result ? q - p : result;
  }
  return result;
};

const len = lengthOfLongestSubstring("dvdf");
console.log(len);
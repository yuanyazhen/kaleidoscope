/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = new Map();
    let j = 2;
    for(let i = 97;i<=122;i) {
        if(j === 9 || j===7) {
            map.set('' + j++, [String.fromCharCode(i++), String.fromCharCode(i++), String.fromCharCode(i++), String.fromCharCode(i++)])
        }else {
            map.set('' + j++, [String.fromCharCode(i++), String.fromCharCode(i++), String.fromCharCode(i++)])
        }
    }
    return res;
};

const res = letterCombinations('28');
// console.log(String.fromCharCode(86));
console.log(res);
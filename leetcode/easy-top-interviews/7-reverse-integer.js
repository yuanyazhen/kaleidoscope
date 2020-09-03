/**
 * 转换成字符串，然后按照字符串处理
 * @param {*} x
 */

var reverse = function(x) {
    let str = x.toString();

    let result = 0;
    let sign = '';

    if(str[0] == '-') {
        sign = str[0];
        str = str.slice(1);
    }

    for(let i = str.length - 1; i >= 0; i--) {
        result = result * 10 + Number(str[i]);

        if(result - Math.pow(2, 31) > 0) {
            result = 0;
            break;
        }
    }

    return `${sign}${result}`;
}


/**
 * Pop and Push Digits & Check before Overflow
 * @param {*} x
 * Time Complexity:O(log(x))(log以10为底x，因为循环此次是每次除以10)
 * Space Complexity:O(1)
 */
function reverse2(x) {
    const MIN_VALUE = -Math.pow(2, 31);
    const MAX_VALUE = Math.pow(2, 31);

    let res = 0;
    while (x != 0) {
        res = res * 10 + x % 10;
        x = parseInt(x / 10);
    }
    
    if (res < MIN_VALUE || res > MAX_VALUE) {
        return 0;
    } else {
        return res;
    }
}


console.log(reverse2(-123));
let x = 12121;

// My solution 1
var isPalindrome = function(x) {
    if (x < 0) return false;
    let x_string = x.toString();
    let a_i = 0; // ascending index
    for (let d_i = x_string.length - 1; d_i > (x_string.length - 1) / 2; d_i--) {  //descending index
        if (x_string[a_i] !== x_string[d_i]) return false;
        a_i++;
    }
    return true
};

// My solution 2
var isPalindrome1 = function(x) {
    if (x < 0) return false;
    let reverse_x = x.toString().split('').reverse().join('');
    if (x == reverse_x) return true;
    return false;
};

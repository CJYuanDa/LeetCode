// let s = "A man, a plan, a canal: Panama";
// let s = ' ';
// let s = "ab_a";
let s ="0P"

// My solution
function isPalindrome(s) {
    s = s.toLowerCase().split(/[^A-Za-z0-9]/).join('');
    let r_index = s.length - 1;
    for (let i=0; i < Math.floor(s.length / 2); i++) {
        if (s[i] != s[r_index]) return false;
        r_index--;
    }
    return s
}

// Solution
function isPalindrome1(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    let left = 0, right = s.length - 1;
    while (left <= right) {
        if (s[left] !== s[right]){
            return false;
        }
        left++;
        right--;
    }

    return true;
}


console.log(isPalindrome(s));
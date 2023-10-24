let s = '(([]))';

// My solution
var isValid = function(s) {
    let check = [];
    for (c of s) {
        if (c == '(' || c == '{' || c == '[') {
            check.push(c);
        }
        if (c == ')') {
            if (check.length == 0 || check[check.length - 1] !== '(') return false;
            check.pop();
        }
        if (c == '}') {
            if (check.length == 0 || check[check.length - 1] !== '{') return false;
            check.pop();
        }
        if (c == ']') {
            if (check.length == 0 || check[check.length - 1] !== '[') return false;
            check.pop();
        }
    }
    return check.length == 0;
};

console.log(isValid(s));

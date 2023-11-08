let x = 2;

// My solution
function mySqrt(x) {
    return Math.floor(x ** (1/2));
}

// My solution
function mySqrt1(x) {
    return Math.floor(Math.sqrt(x));
}

// My solution
function mySqrt2(x) {
    if (x == 0) return 0;
    let start = 1, end = Math.ceil(x / 2);
    let mid = Math.floor((start + end) / 2);
    while (true) {
        if (end * end == x) return end;
        if (start == mid) return start;
        if (mid * mid == x) {
            return mid;
        } else if (mid * mid > x) {
            end = mid;
            mid = Math.floor((start + end) / 2);
            continue;
        } else if (mid * mid < x) {
            start = mid;
            mid = Math.floor((start + end) / 2);
            continue;
        } 
    }
}

console.log(mySqrt2(x));
// let digits = [1,2,3];
// let digits = [4,3,2,1];
let digits = [9];
// let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];


// solution
function plusOne(digits) {
    let addition = 1;
    for (let i=digits.length - 1; i >= 0; i--) {
        digits[i] += addition;
        if (digits[i] < 10) {
            addition = 0;
            break
        } else {
            digits[i] = 0;
            addition = 1;
        }
    }
    if (addition == 1) {
        digits.unshift(1);
    }
    return digits;
}

// better solution
function plusOne1(digits) {
    let i = digits.length - 1;
    while(i >= 0) {
        if(digits[i] !== 9)
        {
            digits[i]++;
            break;
        }
        else
            digits[i] = 0;
        i--;
    }

    if (digits[0] === 0) digits = [1, ...digits];

    return digits;
}


console.log(plusOne(digits));
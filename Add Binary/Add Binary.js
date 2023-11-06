let a = "11", b = "1";
// let a = "1010", b = "1011";

// my solution
function addBinary(a, b) {
    let binary = [], addition = 0;
    a = a.split('');
    b = b.split('');
    if (a.length > b.length) {
        binary.length = a.length;
        let gap = a.length - b.length;
        for (let i=0; i < gap; i++) {
            b.unshift(0);
        }
    } else {
        binary.length = b.length;
        let gap = b.length - a.length;
        for (let i=0; i < gap; i++) {
            a.unshift(0);
        }
    }

    for (let i = binary.length - 1; i >= 0; i--) {
        let sum = Number(a[i]) + Number(b[i]) + addition;
        if (sum > 2) {
            binary[i] = 1;
            addition = 1;
        } else if (sum > 1) {
            binary[i] = 0;
            addition = 1;
        } else {
            binary[i] = sum;
            addition = 0;
        }
    }

    if (addition == 1) binary.unshift(1);
    return binary.join('');
}

// better solution1
function addBinary1(a, b) {
    let result = '';
    let carry = 0;

    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        let digitA = i >= 0 ? parseInt(a[i]) : 0;
        let digitB = j >= 0 ? parseInt(b[j]) : 0;

        let sum = digitA + digitB + carry;
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
        i--;
        j--;
    }

    return result;
}

// better solution2
function addBinary2(a, b) {
    const n = a.length;
    const m = b.length;
    if (n < m) {
        a = '0'.repeat(m - n).concat(a);
    } else {
        b = '0'.repeat(n - m).concat(b);
    }
    let rem = false;
    let ret = '';
    for (let i = a.length - 1; i >= 0; --i) {
        if (a[i] === b[i]) {
            ret = rem ? '1' + ret : '0' + ret;
            if (a[i] === '1') {
                
                rem = true;
            } else {
                
                rem = false;
            }
        } else {
            if (rem) {
                ret = '0' + ret;
                rem = true;
            } else {
                ret = '1' + ret;
                
            }
        }
    }
    return rem ? '1' + ret : ret;
}

// better solutoin3
function addBinary3(a, b) {
    return (BigInt("0b"+a) + BigInt("0b"+b)).toString(2);
}


console.log(addBinary(a, b));
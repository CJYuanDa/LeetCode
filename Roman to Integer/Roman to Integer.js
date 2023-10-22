// My solution
var romanToInt = function(s) {
    const dic = {
        'I': [1, 1],
        'V': [5, 2],
        'X': [10, 3],
        'L': [50, 4],
        'C': [100, 5],
        'D': [500, 6],
        'M': [1000, 7],
    };
    let sum = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (i == s.length - 1) {
            sum += dic[s[i]][0];
        } else if (dic[s[i]][1] < dic[s[i + 1]][1]) {
            sum -= dic[s[i]][0];
        } else {
            sum += dic[s[i]][0];
        }
    }
    return sum
};

// better solution 1
var romanToInt1 = function(s) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const currValue = romanValues[s[i]];

        if (i < s.length - 1 && currValue < romanValues[s[i + 1]]) {
            result -= currValue;
        } else {
            result += currValue;
        }
    }

    return result;
};

// better solution 2
var romanToInt2 = function(s) {
    const romanValue = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let sum = 0;

    for(let i=0; i < s.length; i++) {
        if(romanValue[s[i]] < romanValue[s[i+1]] ) {
            sum -= romanValue[s[i]];
        } else {
            sum += romanValue[s[i]];
        }
    }
    return sum;
};

console.log(romanToInt2('MCMXCIV'));
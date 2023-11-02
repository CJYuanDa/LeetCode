let haystack = "sadbutsad", needle = "sad";
// let haystack = "leetcode", needle = "leeto";

// My solution 1
function strStr(haystack, needle) {
    let regex = new RegExp(needle);
    let result = regex.exec(haystack);
    return result ? result.index : -1;
}

// My solution 2
function strStr1(haystack, needle) {
    for (let i=0; i < haystack.length; i++) {
        if (haystack.slice(i, i + needle.length) === needle) {
            return i;
        }
    }
    return -1;
}

// solution
function strStr2(haystack, needle) {
    if (!haystack.includes(needle)) {
        return -1;
    }
    return haystack.indexOf(needle);
}

console.log(strStr1(haystack, needle));
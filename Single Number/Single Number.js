let nums = [2,1,1];
// let nums = [4,1,2,1,2];
// let nums = [1];

// My solution
function singleNumber(nums) {
    let check = [];
    for (let i=0; i < nums.length; i++) {
        if (!check.includes(nums[i])) {
            check.push(nums[i]);
        } else {
            check.splice(check.indexOf(nums[i]), 1);
        }
    }
    return check[0];
}

// Better solution
function singleNumber1(nums) {
    let c = 0;
    for (let i=0; i < nums.length; i++) {
        c = c ^ nums[i];
    }
    return c;
}

console.log(singleNumber1(nums));
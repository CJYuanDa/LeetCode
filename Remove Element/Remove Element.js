// let nums = [3,2,2,3], val = 3;
let nums = [0,1,2,2,3,0,4,2], val = 2;

// My solution 1
function removeElement(nums, val) {
    let check = 0;
    for (let i=0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums[i] = -1;
            check++
        }
    }
    nums.sort((a, b) => b - a);
    return nums.length - check;

}

// My solutioin 2
function removeElement1(nums, val) {
    let check = 0;
    for (let i=0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[check] = nums[i];
            check++
        }
    }
    return check;
}

// better solution
function removeElement2(nums, val) {
    let arr = nums.filter(e => e !== val);
    nums.splice(0);
    nums.push(...arr);
    return nums.length;
    // or
    while(nums.include(val)) {
        nums.splice(nums.indexOf(val), 1);
    }
}

console.log(removeElement2(nums, val));

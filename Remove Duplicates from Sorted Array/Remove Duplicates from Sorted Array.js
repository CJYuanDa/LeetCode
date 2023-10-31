let nums = [0,0,1,1,1,2,2,3,3,4];

// solution
function removeDuplicates(nums) {
    let length = 0;
    let number;
    for (let i=0; i < nums.length; i++) {
        if (number != nums[i]) {
            number = nums[i];
            nums[length] = number;
            length++;
        }
    }
    return length
}

// better solution
function removeDuplicates1(nums) {
    let ans = 1;
    for (let i=1; i<nums.length; i++) {
        if (nums[i] != nums[i-1]) {
            nums[ans] = nums[i];
            ans++;
        }
    }
    return ans;
}

console.log(removeDuplicates1(nums));
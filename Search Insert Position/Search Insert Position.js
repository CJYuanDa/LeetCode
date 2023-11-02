// let nums = [1,3,5,6], target = 5;
// let nums = [1,3,5,6], target = 2;
let nums = [1,3,5,6], target = 7;

// My solution
function searchInsert(nums, target) {
    for (let i=0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        } else if (target < nums[i]) {
        return i;
        }
    }
    return nums.length;
}

// better solution (binary)
function searchInsert1(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while(start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if(nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return start
}

console.log(searchInsert1(nums, target));
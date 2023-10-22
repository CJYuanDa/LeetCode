let nums = [3,3];
let target = 6;

// My solution 
var twoSum = function(nums, target) {
    for (let index_i in nums) {
        for(let index_j in nums) {
            if (index_i === index_j) continue;
            if (target == nums[index_i] + nums[index_j]) {
                return [index_i, index_j]
            }
        }
    }
};

// Better solution
function twoSum1(nums, target) {
    let hashmap = {};
    for (let i in nums) {
        hashmap[nums[i]] = i;
    }
    for (let i in nums) {
        let complement = target - nums[i];
        if (complement in hashmap && hashmap[complement] != i) {
            return [i, hashmap[complement]];
        }
    }
}

console.log(twoSum1(nums, target));

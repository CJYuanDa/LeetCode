nums = [2, 7, 11, 15]
target = 9

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        numsMap = {}
        for i in range(len(nums)):
            numsMap[nums[i]] = i
            if target - nums[i] in numsMap:
                return [numsMap[target - nums[i]], i]
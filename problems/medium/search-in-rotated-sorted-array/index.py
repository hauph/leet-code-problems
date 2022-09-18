class Solution(object):
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        result = -1
        for index, num in enumerate(nums):
            if num == target:
                result = index
                break
        return result

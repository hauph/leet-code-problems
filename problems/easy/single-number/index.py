class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        res = 0
        i = 0
        arr = []
        numsLength = len(nums)

        while i < numsLength:
            num = nums[i]

            if num not in arr:
                if num not in nums[i + 1:numsLength]:
                    res = num
                    break

                arr.append(num)

            i += 1

        return res

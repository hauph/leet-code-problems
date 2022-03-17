class Solution(object):
    def check(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        clonedNums = sorted(list(nums))

        if str(clonedNums) == str(nums):
            return True

        res = False
        length = len(clonedNums)

        def isCorrectX(x):
            newArr = []
            i = 0

            while (i < length):
                rotatedIndex = (i + x) % length

                if clonedNums[i] == nums[rotatedIndex]:
                    pt1 = nums[i:x]
                    pt2 = nums[x:length]
                    newArr = pt2 + pt1
                    break

                i += 1

            return str(clonedNums) == str(newArr)

        i = 0
        while (i < length):
            if res:
                break

            res = isCorrectX(i)

            i += 1

        return res

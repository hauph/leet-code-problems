# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
# def guess(num):

class Solution(object):
    def guessNumber(self, n):
        """
        :type n: int
        :rtype: int
        """

        def binarySearch(start, end):
            if (start <= end):
                middle = int(math.floor((start + end) / 2))
                guessVal = guess(middle)

                if (guessVal == 0):
                    result = middle
                elif (guessVal < 0):
                    result = binarySearch(start, middle - 1)
                else:
                    result = binarySearch(middle + 1, end)

                return result

        return binarySearch(1, n)

# The isBadVersion API is already defined for you.
# @param version, an integer
# @return a bool
# def isBadVersion(version):

class Solution(object):
    def firstBadVersion(self, n):
        """
        :type n: int
        :rtype: int
        """
        firstBadVersion = None

        start = 1
        end = n

        while start <= end:
            middle = int(math.floor((start + end) / 2))

            if isBadVersion(middle):
                if firstBadVersion == None or (firstBadVersion != None and firstBadVersion > middle):
                    firstBadVersion = middle
                    end = middle - 1
            else:
                start = middle + 1

        return firstBadVersion

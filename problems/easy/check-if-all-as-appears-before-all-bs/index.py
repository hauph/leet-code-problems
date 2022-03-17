class Solution(object):
    def checkString(self, s):
        """
        :type s: str
        :rtype: bool
        """
        result = True
        prevC = ''

        for c in s:
            if len(prevC) == 0:
                prevC = c
            else:
                if prevC == 'b' and c == 'a':
                    result = False
                    break

            prevC = c

        return result

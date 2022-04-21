class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        obj = {}
        res = ''

        for char in s:
            try:
                obj[char] += 1
            except:
                obj[char] = 1

        for char in t:
            try:
                if obj[char] > 0:
                    obj[char] -= 1
                else:
                    res = char
                    break
            except:
                res = char
                break

        return res

class Solution:
    def toLowerCase(self, s: str) -> str:
        res = ''

        for x in s:
            charCode = ord(x[0])

            if charCode >= 65 and charCode <= 90:
                lowerCaseChar = chr(charCode + 32)
                res += lowerCaseChar
            else:
                res += x

        return res
